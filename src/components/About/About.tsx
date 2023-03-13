import React from "react";

import "./About.scss";
import Info from "./components/Info";
import Profile from "./components/Profile";
import { BiDownArrow } from "react-icons/bi";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper col2">
        <Profile />
        <Info />
        <BiDownArrow className="arrow-pulse-down" />
      </div>
    </div>
  );
};

export default About;
