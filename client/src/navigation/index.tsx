import { ContextProvider } from "@hooks/Contexts/ContextProvider";
import { memo } from "react";
import MainNavigator from "./MainNavigator";

import "@solana/wallet-adapter-react-ui/styles.css";

const Index = memo(() => {
  return (
    <ContextProvider>
      <MainNavigator />
    </ContextProvider>
  );
});

export default Index;
