import React from "react";
import { Container, Nav, Col, Navbar, Image } from "react-bootstrap";
import logo from "../logo.png";

export const Footer = () => {
  return (
    <Navbar
      className="flex-wrap"
      style={{ marginTop: "240px", bottom: "0", backgroundColor: "#334756" }}
      id="navbar"
    >
      <Container className="d-flex justify-content-around align-items-start">
        <Navbar.Brand style={{ width: "25%", paddingTop: "15px" }}>
          <Image src={logo} style={{ height: "70px" }} />
        </Navbar.Brand>
        <Col>
          <Nav className="flex-column ">
            <Navbar.Text
              className="fw-bolder"
              style={{ paddingLeft: "0.5rem", color: "#F0A500" }}
            >
              BITBEAT
            </Navbar.Text>

            <Nav.Link
              style={{ width: "fit-content" }}
              id="footLink"
              href="/discover"
            >
              Discover
            </Nav.Link>

            <Nav.Link
              style={{ width: "max-content" }}
              id="footLink"
              href="/howitworks"
            >
              How It Works
            </Nav.Link>
            <Nav.Link
              style={{ width: "fit-content" }}
              id="footLink"
              href="/#explore"
            >
              Explore
            </Nav.Link>
            <Nav.Link
              style={{ width: "fit-content" }}
              id="footLink"
              href="/#sellers"
            >
              Sellers
            </Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Nav className="flex-column">
            <Navbar.Text
              className="fw-bolder"
              style={{ paddingLeft: "0.5rem", color: "#F0A500" }}
            >
              About
            </Navbar.Text>
            <Nav.Link style={{ width: "fit-content" }} id="footLink" href="/">
              About
            </Nav.Link>
            <Nav.Link style={{ width: "fit-content" }} id="footLink" href="/">
              Benefits
            </Nav.Link>
            <Nav.Link style={{ width: "fit-content" }} id="footLink" href="/">
              Team
            </Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Nav className="flex-column">
            <Navbar.Text
              className="fw-bolder"
              style={{ paddingLeft: "0.5rem", color: "#F0A500" }}
            >
              Connect
            </Navbar.Text>
            <Nav.Link style={{ width: "fit-content" }} id="footLink" href="/">
              Instagram
            </Nav.Link>
            <Nav.Link style={{ width: "fit-content" }} id="footLink" href="/">
              Twitter
            </Nav.Link>
          </Nav>
        </Col>
      </Container>
      <Container style={{ marginTop: "15px" }}>
        <Col>
          <Nav className="d-flex justify-content-between align-items-center">
            <Nav.Item style={{ color: "#F0A500" }}>
              © <Image src={logo} style={{ width: "40px" }} /> . All Rights
              Reserved.
            </Nav.Item>
            <Nav.Item className="d-flex">
              <Nav.Link href="/" id="footLink">
                Terms of Use
              </Nav.Link>

              <Nav.Link href="/" id="footLink">
                Privacy Policy
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  );
};