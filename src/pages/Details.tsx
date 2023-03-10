import React from "react";

import { Route, Routes } from "react-router-dom";
import Carrers from "./Carrers";
import Courses from "./Courses";
import Projects from "./Projects";

const Details = () => {
  return (
    <div>
      <Routes>
        <Route path="/carrers" element={<Carrers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default Details;
