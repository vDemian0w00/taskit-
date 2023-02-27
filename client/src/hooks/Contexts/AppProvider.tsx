import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as anchor from "@project-serum/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import idl from "@services/idl.json";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { CreateUserParams } from "../../types/generalTypes";

type UserAccount = {
  name: string;
  profile: PublicKey;
  profiles: PublicKey[];
};

type AppContextType = {
  user: UserAccount | undefined;
  initialized: boolean;
};

const AppContext = createContext({} as AppContextType);

const PROGRAM_KEY = new PublicKey(idl.metadata.adress);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContext");
  }
  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState();
  const [initialized, setInitialized] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);

  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      return new anchor.Program(idl as anchor.Idl, PROGRAM_KEY, provider);
    }
  }, [connection, anchorWallet]);

  useEffect(() => {
    const start = async () => {
      console.log("Program", program);
      if (program && publicKey) {
        try {
          const [userPDA] = await findProgramAddressSync(
            [utf8.encode("user"), publicKey.toBuffer()],
            program.programId
          );
          const user = await program.account.userAccount.fetch(userPDA);
          if (user) {
            setInitialized(true);
          }
          console.log("User", user);
        } catch (e: any) {
          console.log("No user", e);
          setInitialized(false);
        } finally {
          setTransactionPending(false);
        }
      }
    };
    start();
  }, [program, publicKey, transactionPending]);

  const createUser = async (params: CreateUserParams) => {
    if (program && publicKey) {
      try {
        let { email, name, password, rol, } = params;
        let actType, idiomes;
        if(rol === "EXPERT") {
          actType = params.actType;
          idiomes = params.idiomes;
        }
        setTransactionPending(true);
        const [userPDA] = await findProgramAddressSync(
          [utf8.encode("user"), publicKey.toBuffer()],
          program.programId
        );
        await program.methods.initUser("");
      } catch (error: any) {
        console.log("Error", error);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        initialized,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
