import {
  WalletConnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Navbar } from "../../components/ComponentsGenerals";
import "./profiles.css";
import useSolanaAccount from "@hooks/useSolanaAccount";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const Profiles = () => {
  const { account, transactions } = useSolanaAccount();

  return (
    <>
      <Navbar />
      <div className="containerMain">
        {account ? account?.lamports / LAMPORTS_PER_SOL + " SOL" : "No account"}
        {"\n"}
        {account ? account?.owner.toBase58() : "No account"}

        {/* <WalletMultiButton /> */}
        <WalletConnectButton />
      </div>
    </>
  );
};

export default Profiles;
