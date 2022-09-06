import Head from "next/head";
import { useEffect, useState } from "react";
import TokenCard from "../../components/TokenCard";
import { useNeoFutbol } from "../../hooks/useNeoFutbol";
import { gallery_container, tokens_container } from "./index.module.css";

export default function Home() {
  const { contract, loading } = useNeoFutbol();

  console.log(loading);
  
  if (loading) return <p>loading</p>;

  return (
    <div className={gallery_container}>
      <Head>
        <title>Neo FuTbol gallery</title>
        <meta name="description" content="NFT Neo FuTbol gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={tokens_container}>
        {contract.gallery.map((token) => {
          return <TokenCard token={token} />;
        })}
      </div>
    </div>
  );
}
