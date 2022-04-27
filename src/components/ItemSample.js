import React from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Player } from "./Player";

export const ItemSample = ({
  id,
  imgSRC,
  name,
  price,
  bid,
  soundSRC,
  desc,
}) => {

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
    <div className="d-grid justify-content-center expCSS">
      <div className="thumbnail">
        <Image src={imgSRC} className="expImg" fluid />
        <Player sound={soundSRC} />
      </div>
      {/* <Link to={`/item/${id}`} className="text-decoration-none"> */}
      <div className="expInfo">
        <h6>{shortUsername(name)}</h6>
        <h6>{shortPrice(price)} ETH</h6>
        <h6>{shortDesc(desc)}</h6>
      </div>
      {/* </Link> */}
    </div>
  );
};
