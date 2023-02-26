import type { Adapter, WalletError } from "@solana/wallet-adapter-base";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider as ReactUIWalletModalProvider,
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { SnackbarProvider, useSnackbar } from "notistack";
import type { FC, ReactNode } from "react";
import React, { useCallback, useMemo } from "react";
import { AutoConnectProvider, useAutoConnect } from "./AutoConnectProvider";

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { autoConnect } = useAutoConnect();

  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      // new UnsafeBurnerWalletAdapter(),
      new PhantomWalletAdapter(),
    ],
    [network]
  );

  const { enqueueSnackbar } = useSnackbar();
  const onError = useCallback(
    (error: WalletError, adapter?: Adapter) => {
      enqueueSnackbar(
        error.message ? `${error.name}: ${error.message}` : error.name,
        { variant: "error" }
      );
      console.error(error, adapter);
    },
    [enqueueSnackbar]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        onError={onError}
        autoConnect={autoConnect}
      >
        <WalletModalProvider>
          <ReactUIWalletModalProvider>{children}</ReactUIWalletModalProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SnackbarProvider>
      <AutoConnectProvider>
        <WalletContextProvider>{children}</WalletContextProvider>
      </AutoConnectProvider>
    </SnackbarProvider>
  );
};
