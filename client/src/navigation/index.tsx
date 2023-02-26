import { ContextProvider } from "@hooks/Contexts/ContextProvider";
import { memo } from "react";
import MainNavigator from "./MainNavigator";

import "@solana/wallet-adapter-react-ui/styles.css";
import { AppProvider } from "@hooks/Contexts/AppProvider";

const Index = memo(() => {
  return (
    <ContextProvider>
      <AppProvider>
        <MainNavigator />
      </AppProvider>
    </ContextProvider>
  );
});

export default Index;
