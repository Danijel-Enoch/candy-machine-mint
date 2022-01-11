import { useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useState } from 'react';
import * as anchor from "@project-serum/anchor";
import { FetchNFTClient } from '@audius/fetch-nft'

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const fetchClient = new FetchNFTClient()
///////////////////////

////////////////////

const useWalletNfts = () => {
  const wallet = useWallet();
  const [isLoading, setIsLoading] = useState(false)

  const [nfts, setNfts] = useState<Array<any>>([])

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      setIsLoading(true)

      
      fetchClient.getCollectibles({
        solWallets: ['BHzkh8kYAhWLBSzxxtkXcMSTzHj4gd5HxM6fiz6Sb77f']
      }).then(res => console.log(res))

     //setNfts( res as any)
     setIsLoading(false)
    })();
  }, [wallet])

  return [isLoading, nfts];
}

export default useWalletNfts;