import React from "react";
import "./profiles.css";
import { Navbar } from "../../components/ComponentsGenerals";
import { clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState, useEffect, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useSolanaAccount from "@hooks/useSolanaAccount";
import { WalletConnectButton } from "@solana/wallet-adapter-react-ui";
// import { useWallet } from "@solana/wallet-adapter-react";

const Profiles = () => {
  const { account, transactions } = useSolanaAccount();

  return (
    <>
      <Navbar />
      <div className="containerMain">
        {/* {account ? account?.lamports / LAMPORTS_PER_SOL + " SOL" : "No account"} */}
        <WalletConnectButton  />

        {/* holaaaaaaaaaaaaaaaa */}
      </div>
    </>
  );
};

export default Profiles;
