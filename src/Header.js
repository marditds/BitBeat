import React from "react";
import logo from "./logo_placeholder.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const WalletLink = () => {
  return (
    <div>
      <Link to="/">
        <h4 className="wallet">Grab Your Wallet</h4>
      </Link>
    </div>
  );
};

function Header() {
  return (
    <div className="headerDiv">
      <Link to="/">
        <img src={logo} className="logo img-responsive" alt="" />
      </Link>
      <WalletLink />
    </div>
  );
}

export default Header;
