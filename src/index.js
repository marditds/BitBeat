import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

// const serverUrl = "https://eb2mpznt2lst.usemoralis.com:2053/server";
// const appId = "BxHJcO08o9RgRIjsfre8gPp5GxINImJjt0wJKLk9";

ReactDOM.render(
  <MoralisProvider
    appId="cZv9zIpMxV7r5VkyFMwGZV6rhDWAhEpiVp6kGksd"
    serverUrl="https://acv92lhffirh.usemoralis.com:2053/server"
  >
    <App />
  </MoralisProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
