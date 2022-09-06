import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ButtonConnect from "../ButtonConnect";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { glowOnHover } from "../Hero/index.module.css";
import { useWallet } from "../../hooks/useWallet";

function Header() {
  const { disconnect, isActive } = useWallet();
  const [show, setShow] = useState(false);
  const handleClose = () => setTimeout(() => setShow(!show), 500);
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="mb-3"
          sticky="top"
        >
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                alt="logo"
                src="/logo.png"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={handleClose}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/#home" onClick={handleClose}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="/#info" onClick={handleClose}>
                    Como funciona?
                  </Nav.Link>
                  <Nav.Link href="/gallery" onClick={handleClose}>
                    Galeria
                  </Nav.Link>
                  <Nav.Link href="/#scoreboard" onClick={handleClose}>
                    Tabla de posiciones
                  </Nav.Link>
                  <br />
                  {!isActive ? (
                    <ButtonConnect
                      className={glowOnHover}
                      variant="danger"
                      size="sm"
                    />
                  ) : (
                    <Button
                      onClick={() => {
                        disconnect();
                      }}
                      className={glowOnHover}
                      variant="danger"
                      size="sm"
                    >
                      Desconectar
                    </Button>
                  )}{" "}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
