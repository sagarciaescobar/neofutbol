import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ButtonConnect from "../ButtonConnect";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { header, nav, brand } from "./index.module.css";
import { useWallet } from "../../hooks/useWallet";
import { Menu } from "./lib/Menu";

function Header() {
  const { disconnect, isActive } = useWallet();
  const [show, setShow] = useState(false);
  const handleClose = () => setTimeout(() => setShow(!show), 500);
  return (
    <header className={header}>
      <nav className={nav}>
        <div className={brand}>
          <a>
            <strong>NFT</strong> NEO FUTBOL
          </a>
        </div>
        <Menu />
      </nav>
    </header>
  );
}

export default Header;
