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
  const history = useHistory();
  return (
    <div className="d-grid justify-content-center expCSS">
      <div className="thumbnail">
        <Image src={imgSRC} className="expImg" fluid />
        <Player sound={soundSRC} />
      </div>
      {/* <Link to={`/item/${id}`} className="text-decoration-none"> */}
      <div className="expInfo">
        <h6>{name}</h6>
        <h6>{price} ETH</h6>
        <h6>{desc}</h6>
      </div>
      {/* </Link> */}
    </div>
  );
};
