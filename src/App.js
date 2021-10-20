import "./App.css";
import React from "react";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Error } from "./components/404";
import { Home } from "./components/Home";
import Profile from "./components/Profile";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#082032" }}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/discover" component={Home} />
          <Route exact path="/howitworks" component={Home} /> */}
          <Route exact path="/profile/:id" children={<Profile />} />
          <Route exact path="*" component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
