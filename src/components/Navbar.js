import React from "react";
import { Image, Nav, Navbar, Form } from "react-bootstrap";
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
        expand="lg"
        id="navbar"
      >
        <Navbar.Brand href="/">
          <Image src={logo} style={{ height: "80px", paddingLeft: "20px" }} />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="navToggleButton"
        />
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
          <Nav.Item className="align-self-center" id="searchBarSpace">
            <Form action="/" method="get">
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  id="searchBar"
                />
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
            className="profileButton"
            id="profileButton"
            style={{ display: showProfile }}
          >
            Profile
          </Nav.Link>
          <Nav.Item
            className="logOutButton"
            id="logOutButton"
            onClick={() => logout()}
            style={{ display: showLogOut }}
          >
            Log Out
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
