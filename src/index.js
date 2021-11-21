import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import Moralis from "moralis";

const serverUrl = "https://sj6co7gj07d0.usemoralis.com:2053/server";
const appId = "D8dudLZKW7AykUk7l5pO2cwsSroseaNekOu85Qdc";
Moralis.start({ serverUrl, appId });

ReactDOM.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <App />
  </MoralisProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
