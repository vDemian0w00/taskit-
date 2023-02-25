import { memo } from "react";
import MainNavigator from "./MainNavigator";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";
const Index = memo(() => {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  const endpoint = useMemo(() => clusterApiUrl("devnet"), []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <MainNavigator />
      </WalletProvider>
    </ConnectionProvider>
  );
});

export default Index;
