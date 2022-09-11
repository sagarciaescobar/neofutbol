/* eslint-disable @next/next/no-img-element */
import React from "react";
import { howto, info1, info2 } from "./index.module.css";
import { useWallet } from "../../hooks/useWallet";
import ButtonConnect from "../ButtonConnect";
import ButtonMint from "../ButtonMint";

export default function Info() {
  const { isActive, provider } = useWallet();
  return (
    <section className={howto} id="howto">
      <div>
        <div className={info1}>
          <h4>COMIENZA</h4>
          <h6>Comenzar a ser dueño de tu pasión es fácil</h6>
          <div>
            <p>PASO 1</p>
            <ButtonConnect />
            <p>PASO 2</p>
            <ButtonMint />
          </div>
        </div>
        <div className={info2}>
          <p>METAMASK Y WALLET CONNECT YA ESTAN EN LA CANCHA</p>
          <img src="/static/cancha.jpg" alt="cancha" />
        </div>
      </div>
    </section>
  );
}
