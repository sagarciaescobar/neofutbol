import React from "react";
import Button from "../ButtonConnect";
import ButtonMint from "../ButtonMint";
import Image from "next/image";
import styles from "./index.module.css";
import wallets from "../../public/wallets.png";
import cards from "../../public/cards.png";
import album from "../../public/album.png";
import { glowOnHover } from "../Hero/index.module.css";
import { useWallet } from "../../hooks/useWallet";

const { bloque, bloqueTexto, reverse, bloqueImg, bloque_2 } = styles;

export default function Info() {
  const { isActive, provider } = useWallet();
  return (
    <section id="info">
      <div className={bloque}>
        <div className={bloqueTexto}>
          <h3>¿Qué es NFT Neo FuTbol?</h3>
          <div>
            Bienvenide al primer album digital de figuritas del Mundial Qatar
            2022!
            <br />
            <b>Neo FuTbol</b> te permite coleccionar NFTs de los jugadores
            participantes en el Mundial de futbol de Qatar 2022, cada figurita
            tiene su propia rareza, no solo por la cantidad de figuritas
            disponibles sino también por su Tier:
            <ul>
              <li>
                Tier Común: figurita de cuerpo dorado y sin decoración en el
                marco.
              </li>
              <li>
                Tier Heroico: figurita de cuerpo azulado y marco con
                decoraciones doradas.
              </li>
              <li>
                Tier Legendario: figurita de cuerpo platinado y marco con
                decoraciones doradas y platinadas.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image src={cards} className={bloqueImg}></Image>
        </div>
      </div>
      <div className={[bloque, reverse].join(" ")}>
        <div className={bloqueTexto}>
          <h3>Ganar, ganar y ganar!</h3>
          <div>
            No solo puedes ganar obteniendo figuritas difíciles, también puedes
            ganar con su Tier y, ademas, si eres la primer persona en completar
            el album al 100% ganas un premio especial de 2 Ethers!
          </div>
        </div>
        <div>
          <Image src={album} className={bloqueImg}></Image>
        </div>
      </div>
      <div className={bloque}>
        <div className={bloqueTexto}>
          <h3>Comenzá...</h3>
          <div>
            Comenzar a ser dueño de tu pasión es fácil:
            <ul>
              <li>Conecta tu wallet</li>
              <li>Compra tus primeras figuritas</li>
              <li>Compartí tu pasión!</li>
            </ul>
          </div>
        </div>
        <div>
          <Image src={wallets} className={bloqueImg}></Image>
        </div>
      </div>
      {!isActive && (
        <>
          <div className={bloque_2}>
            <h3>Conecta tu wallet y obten tu token</h3>
            <Button className={glowOnHover} variant="danger" size="lg" />{" "}
          </div>
        </>
      )}
      {isActive && (
        <div className={bloque}>
          <ButtonMint className={glowOnHover} variant="danger" size="lg" />{" "}
        </div>
      )}
    </section>
  );
}
