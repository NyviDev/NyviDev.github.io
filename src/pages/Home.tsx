import React from "react";
import About from "../components/About/About";
import "./Home.scss";
import { BrowserRouter } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Details from "./Details";

const Home = () => {
  return (
    <main>
      <About />
      <div className="menu-details">
        <div className="wrapper center">
          <BrowserRouter>
            {/* <Menu /> */}
            <Details />
          </BrowserRouter>
        </div>
      </div>
    </main>
  );
};

export default Home;
