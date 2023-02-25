import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { memo, useMemo } from "react";
import MainNavigator from "./MainNavigator";
import Profiles from "@scenes/profiles/profiles";

const Index = memo(() => {
  const network = WalletAdapterNetwork.Devnet;

  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);
  const endpoint = useMemo(() => clusterApiUrl("devnet"), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <MainNavigator />
          <Profiles />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
});

export default Index;
