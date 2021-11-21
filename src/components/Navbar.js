import React, { useState } from "react";
import { Image, Nav, Navbar, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from "../logo.png";
import { useMoralis } from "react-moralis";

export const NavBar = () => {
  const [walletText, setWalletText] = useState("Connect Wallet");
  const { authenticate, isAuthenticated, logout } = useMoralis();

  const authenticateFunc = () => {
    authenticate();
    // if (!isAuthenticated) {
    //   setWalletText("Connect Wallet");
    // } else {
    //   setWalletText("Connected");
    // }
  };

  return (
    <div>
      <Navbar
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
        className="justify-content-around d-flex navBarCSS"
        expand="sm"
        id="navbar"
      >
        <Navbar.Brand href="/">
          <Image src={logo} style={{ height: "80px" }} />
        </Navbar.Brand>

        <Nav.Item>
          <Nav.Link href="/discover" id="navLink">
            Discover
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/howitworks" id="navLink">
            How It Works
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ width: "50%" }} className="align-self-center">
          <Form action="/" method="get">
            <Form.Group>
              <Form.Control type="text" placeholder="Search..." />
              <div className="searchPic"></div>
            </Form.Group>
          </Form>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href=" "
            className="wallet"
            id="connectWallet"
            onClick={authenticateFunc}
          >
            {walletText}
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </div>
  );
};
