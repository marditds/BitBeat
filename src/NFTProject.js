import React from "react";
import "./NFTCSS.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { Home } from "./Home";

const LearnMore = () => {
  return (
    <div className="tourMain">
      <p className="learnMoreP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam
        vitae maxime doloribus. Inventore pariatur ullam eligendi voluptatem id
        culpa?
      </p>
      <div className="learnMoreDiv">
        <Link to="/" className="learnMoreLink">
          <h2 className="learnMoreBox">Learn More</h2>
        </Link>
        <Link to="/home">
          <h5 className="skipLink">Skip</h5>
        </Link>
      </div>
    </div>
  );
};

const NFTProject = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={LearnMore} />
      </Switch>
    </Router>
  );
};

export default NFTProject;
