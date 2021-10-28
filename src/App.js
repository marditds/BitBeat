import "./App.css";
import React from "react";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Error } from "./components/404";
import { Home } from "./components/Home";
import Profile from "./components/Profile";
import { ScrollTop } from "./components/ScrollTop";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#082032" }}>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/discover" component={Error} />
          <Route exact path="/howitworks" component={Error} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:id" children={<Profile />} />
          <Route exact path="*" component={Error} />
        </Switch>
      </BrowserRouter>
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;
