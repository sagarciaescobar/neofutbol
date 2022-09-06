import React from "react";
import ButtonConnect from "../ButtonConnect";
import Image from "next/image";
import { heroContent, heroWrapper, glowOnHover } from "./index.module.css";
import { useWallet } from "../../hooks/useWallet";

const IMAGE_URL = "/Hero2.png";

export default function Hero() {
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
          <ButtonConnect className={glowOnHover} variant="danger" size="lg" />{" "}
        </div>
      </div>
    </section>
  );
}
