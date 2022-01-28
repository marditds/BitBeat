import React, { useState } from "react";
import { Image, Nav, Navbar, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from "../logo.png";
import { useMoralis } from "react-moralis";

export const NavBar = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  const showConnect = isAuthenticated ? "none" : "block";
  const showProfile = isAuthenticated ? "block" : "none";
  const showLogOut = isAuthenticated ? "block" : "none";

  if (!isAuthenticated) {
    console.log("aaaaaaaaaaaaaaaaa");
  } else {
    console.log("bbbbbbbbbbbbbbbbb");
  }

  return (
    <div>
      <Navbar
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
        collapseOnSelect
        expand="md"
        id="navbar"
      >
        {/* <Container> */}
        <Navbar.Brand href="/">
          <Image src={logo} style={{ height: "80px", paddingLeft: "20px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-around"
        >
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

          <Nav.Item
            className="wallet"
            id="connectWallet"
            onClick={() => authenticate()}
            style={{ display: showConnect }}
          >
            Connect Wallet
          </Nav.Item>
          <Nav.Link
            href="/profile"
            className="wallet"
            id="profileButton"
            // onClick={() => logout()}
            style={{ display: showProfile }}
          >
            Profile
          </Nav.Link>
          <Nav.Item
            className="wallet"
            id="connectWallet"
            onClick={() => logout()}
            style={{ display: showLogOut }}
          >
            Log Out
          </Nav.Item>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};
