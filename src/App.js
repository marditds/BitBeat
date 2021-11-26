import "./App.css";
import React from "react";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Error } from "./components/404";
import { Home } from "./components/Home";
import Profile from "./components/Profile";
import { ItemsPage } from "./components/ItemsPage";
import { Discover } from "./components/Discover";
import { ScrollTop } from "./components/ScrollTop";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { PersonalProfile } from "./components/PersonalProfile";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#082032" }}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/howitworks" component={Error} />
          <Route exact path="/profile" component={PersonalProfile} />
          <Route exact path="/profile/:id" children={<Profile />} />
          <Route exact path="/item/:id" children={<ItemsPage />} />
          <Route exact path="*" component={Error} />
        </Switch>
        <ScrollTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
