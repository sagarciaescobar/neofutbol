import React from "react";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import styles from "./index.module.css";
import { useWallet } from "../../hooks/useWallet";

const { heroContent, heroWrapper, glowOnHover } = styles;

const IMAGE_URL = "/Hero2.png";

export default function Hero() {
  const { connect, isActive, isActivating } = useWallet();
  return (
    <section id="hero">
      <div className={heroWrapper} id="home">
        <Image
          priority
          src={IMAGE_URL}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Imagenes de figuritas de futbol"
        />
        <div className={heroContent}>
          <Button
            disabled={isActive}
            onClick={connect}
            className={glowOnHover}
            variant="danger"
            size="lg"
          >
            {!isActive && "Conecta tu wallet"}
            {isActive && "Conectado"}
          </Button>{" "}
        </div>
      </div>
    </section>
  );
}
