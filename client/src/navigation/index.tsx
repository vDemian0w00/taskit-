import { ContextProvider } from "@hooks/Contexts/ContextProvider";
import { memo } from "react";
import MainNavigator from "./MainNavigator";

import "@solana/wallet-adapter-react-ui/styles.css";

const Index = memo(() => {
  // const network = WalletAdapterNetwork.Devnet;

  // const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);
  // const endpoint = useMemo(() => clusterApiUrl("devnet"), [network]);

  return (
    // <ConnectionProvider endpoint={endpoint}>
    //   <WalletProvider wallets={wallets} autoConnect>
    //     <WalletModalProvider>
    <ContextProvider>
      <MainNavigator />
    </ContextProvider>
    //   </WalletProvider>
    // </ConnectionProvider>
  );
});

export default Index;
