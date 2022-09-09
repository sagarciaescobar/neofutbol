import React from "react";
import Button from "../ButtonConnect";
import Image from "next/image";
import img02 from "../../public/static/002.jpg";
import {
  info,
  info1,
  info2,
  info1Imgs,
  info1_main,
  info1_secondary,
} from "./index.module.css";
import { useWallet } from "../../hooks/useWallet";

export default function Info() {
  const { isActive, provider } = useWallet();
  return (
    <section className={info} id="info">
      <div>
        <div className={info1}>
          <h4>¿QUÉ ES NFT NEO FUTBOL?</h4>
          <p className={info1_main}>
            Bienvenide al primer album digital de figuritas del Mundial Qatar
            2022!. Neo FuTbol te permite coleccionar NFTs de los jugadores
            participantes en el Mundial de futbol de Qatar 2022, cada figurita
            tiene su propia rareza, no solo por la cantidad de figuritas
            disponibles sino también por su Tier:
          </p>
          <p className={info1_secondary}>
            Tier Común: figurita de cuerpo dorado y sin decoración en el marco.
            Tier Heroico: figurita de cuerpo azulado y marco con decoraciones
            doradas. Tier Legendario: figurita de cuerpo platinado y marco con
            decoraciones doradas y platinadas.
          </p>
          <div className={info1Imgs}>
            <img src="/static/001.jpg" alt="tokens ejemplo"/>
            <img src="/static/001.jpg" alt="tokens ejemplo"/>
            <img src="/static/001.jpg" alt="tokens ejemplo"/>
            <img src="/static/001.jpg" alt="tokens ejemplo"/>
            <img src="/static/001.jpg" alt="tokens ejemplo"/>
          </div>
        </div>
        <div className={info2}>
          <img src="/static/ball.jpg" alt="balon de futbol"/>
          <h4>GANAR, GANAR Y GANAR !</h4>
          <p>
            No solo puedes ganar obteniendo figuritas difíciles, también puedes
            ganar con su Tier y, ademas, si eres la primer persona en completar
            el album al 100% ganas un premio especial de 2 Ethers!
          </p>
        </div>
      </div>
    </section>
  );
}
