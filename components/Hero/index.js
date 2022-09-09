import React, { useState } from "react";
import ButtonConnect from "../ButtonConnect";
import Image from "next/image";
import { heroContent, heroWrapper } from "./index.module.css";
import { useWallet } from "../../hooks/useWallet";
import img01 from "../../public/static/001.jpg";
import img02 from "../../public/static/002.jpg";

export default function Hero() {
  return (
    <section className={heroWrapper} id="hero">
      <div>
        <Image layout="fixed" width="264" height="343" src={img02} />
        <div className={heroContent}>
          <h3>PASIÓN PROPIA</h3>
          <ButtonConnect />
        </div>
        <Image layout="fixed" width="264" height="343" src={img01} />
      </div>
    </section>
  );
}
