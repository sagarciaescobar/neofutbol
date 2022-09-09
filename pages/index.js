import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Info from "../components/Info";
import HowTo from "../components/HowTo"
import Scoreboard from "../components/Scoreboard";
import { main_page, container } from "./index.module.css";
import { useState } from "react";

export default function Home() {
  return (
    <div id="home" className={main_page}>
      <Head>
        <title>NFT Neo FuTbol</title>
        <meta name="description" content="NFT Neo FuTbol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Info />
      <HowTo />
      <Scoreboard />
    </div>
  );
}
