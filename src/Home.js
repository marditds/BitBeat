import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HOMECSS.css";
import { itemsInfo } from "./HomeItemsInfo";

const HomeItems = ({ title, name, info }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{name}</h5>
      <p>{info}</p>
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <div className="homeDiv text-left row">
        {itemsInfo.map((itemsInfo) => {
          return (
            <div className="col-md-4 col-sm-6 itemCSS">
              <HomeItems key={itemsInfo.id} {...itemsInfo}></HomeItems>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export this function, then import it in the other page. choose the Path2D.
