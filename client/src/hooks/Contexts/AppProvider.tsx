import { createContext, useContext, useEffect, useMemo, useState } from "react";
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

type AppContextType = {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
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
  const [isMobile, setIsMobile] = useState(false);

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
      return new anchor.Program(idl, PROGRAM_KEY, provider);
    }
  }, [connection, anchorWallet]);


  useEffect(() => {
    const start = async () => {
      if (program && publicKey) {
        try {
          const [userPDA] = await findProgramAddressSync(
            [utf8.encode("user"), publicKey.toBuffer()],
            program.programId
          );
          const userAccount = await program.account.userAccount.fetch(userPDA);
        } catch (e: any) {
          console.log("No user", e);
        }
      }
    };
    start();
  }, []);

  return (
    <AppContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </AppContext.Provider>
  );
};
