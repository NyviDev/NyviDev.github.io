import React from "react";

import "./About.scss";
import Info from "./components/Info";
import Profile from "./components/Profile";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper col2">
        <Profile/>
        <Info />
      </div>
    </div>
  );
};

export default About;
