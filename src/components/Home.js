import React from "react";
import mainBG2 from "../mainBG2.png";
import "../App.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PopularList } from "./Popular";
import { ExploreList } from "./Explore";

export const Home = () => {
  return (
    <div>
      <div className="homeCSS">
        <Link className="text-decoration-none" to="/discover">
          <Image src={mainBG2} className="mainPic" fluid />
        </Link>
      </div>
      <PopularList />
      <ExploreList />
    </div>
  );
};
