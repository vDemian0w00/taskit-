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
      <div className="containerOutNavbar">
        <div className="containerItems">
          <form className="containerRoles">
            <div className="itemUsuario">a</div>
            <div className="itemExperto">a</div>
          </form>
          <div className="pregunta">
            <div className="textQuestion">
              ¿Qué tipo de usuario eres?
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Profiles;
