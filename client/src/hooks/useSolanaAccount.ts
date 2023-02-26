import { useState, useEffect, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { AccountInfo, ConfirmedSignatureInfo, PublicKey } from "@solana/web3.js";

function useSolanaAccount() {
  const [account, setAccount] = useState<AccountInfo<Buffer>>();
  const [transactions, setTransactions] = useState<Array<ConfirmedSignatureInfo>>();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  console.log(publicKey)

  const init = useCallback(async () => {
    if (publicKey) {
      let acc = await connection.getAccountInfo(publicKey);
      setAccount(acc as AccountInfo<Buffer>);
      let transactions = await connection.getConfirmedSignaturesForAddress2(
        publicKey,
        {
          limit: 10,
        }
      );
      setTransactions(transactions);
    }
  }, [publicKey, connection]);

  useEffect(() => {
    if (publicKey) {
      setInterval(init, 1000);
    }
  }, [init, publicKey]);

  return { account, transactions };
}

export default useSolanaAccount;
