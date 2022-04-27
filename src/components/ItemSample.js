import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Player } from "./Player";
import avatarDefault from "../images/avatarDefault.png";

export const ItemSample = ({ uid, src, sellerUsername, name, askingPrice, bid, tokenUri }) => {

  const [image, setImage] = useState([]);
  const [audio, setAudio] = useState([]);
  const [item, setItem] = useState([]);

  async function fetchData() {
    const response = await fetch(tokenUri);
    const json = await response.json();
    setImage(json.image);
    setAudio(json.audio);
    setItem(json);
  }

  useEffect(() => {
    fetchData();
  }, [image, audio, item]);


  function shortUsername(str) {
    return str && str.length > 10 ? str.substring(0, 10) + "..." : str;
  }

  function shortPrice(str) {
    return str && str.length > 6 ? str.substring(0, 6) + "..." : str;
  }

  function shortDesc(str) {
    return str && str.length > 20 ? str.substring(0, 20) + "..." : str;
  }

  return (
    <div className="d-grid justify-content-center expCSS" style={{ height: "100%" }}>
      <div className="thumbnail">
        <Image src={image ? image : avatarDefault} className="expImg" fluid style={{ height: "100%" }} />
        <Player sound={audio} />
      </div>
      {/* <Link to={`/item/${id}`} className="text-decoration-none"> */}
      <div className="expInfo">
        <h6>{item.name}</h6>
        <h6>{shortPrice(askingPrice)} ETH</h6>
        <h6>{shortDesc(item.description)} </h6>
      </div>
      {/* </Link> */}
    </div>
  );
};
