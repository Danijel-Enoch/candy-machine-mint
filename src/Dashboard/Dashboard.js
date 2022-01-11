import React from 'react'
import "./dashboard.css"
import useWalletNfts from '../hooks/use-wallet-nfts';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
const NFTs = require('@primenums/solana-nft-tools');
const web3 = require("@solana/web3.js");


function Dashboard() {
    const conn = new web3.Connection(
        web3.clusterApiUrl('devnet'),
        'confirmed'
    );
    const wallet = useWallet();
    if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        console.log("happy nnewm ");
      }
    console.log(NFTs)
    let  nfts=NFTs.getNftsForOwner(conn,'EF32NYN6KovcqWWj8QwQmQMd1km8BrF2a1TX7MTjewJU')
    console.log(nfts);

    const Img = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            Name: "Yasuke",
            Price: 40,
            alt: "name"
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            Name: "Yasuke",
            Price: 40,
            alt: "name"
        }
        ,
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            Name: "Yasuke",
            Price: 40,
            alt: "name"
        }
        ,

        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            Name: "Yasuke",
            Price: 40,
            alt: "name"
        }
    ]
    return (


        <div className="dashboard">

            <div className='dashboard-card'>
                {Img.map((d) => (
                    <div className="dashboard-inner" key={d.id}>
                        <img src={d.img} alt={d.alt} />
                        <div className='price'>
                            <p>{d.Name}</p><span>{d.Price}$</span>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Dashboard
