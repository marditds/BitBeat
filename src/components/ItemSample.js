import React from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const ItemSample = ({ id, imgSRC, name, price, bid, musicSrc }) => {
  const history = useHistory();
  return (
    <div className="d-grid justify-content-center expCSS">
      <div className="thumbnail">
        <Image src={imgSRC} className="expImg" fluid />
      </div>
      {/* <Link to={`/item/${id}`} className="text-decoration-none"> */}
      <div className="expInfo">
        <h6>{name}</h6>
        <h6>{price}</h6>
        <h6>{bid}</h6>
      </div>
      {/* </Link> */}
    </div>
  );
};
