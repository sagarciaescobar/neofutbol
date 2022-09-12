import React, { useState } from "react";
import ButtonConnect from "../ButtonConnect";
import { Container, Navbar, Nav } from "react-bootstrap";
import { header, nav, brand, link } from "./index.module.css";
import { useWallet } from "../../hooks/useWallet";
import { data } from "./lib/data";

function Header() {
  const { disconnect, isActive } = useWallet();
  const [show, setShow] = useState(false);
  const handleClose = () => setTimeout(() => setShow(!show), 500);
  return (
    <Navbar expand="md" className={header}>
      <Container>
        <Navbar.Brand href="/" className={brand}>
          <strong>NFT</strong>&nbsp;NEO FUTBOL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="nav-pills" navbarScroll>
            {data.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link href={item.href} className={link}>
                  {item.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
