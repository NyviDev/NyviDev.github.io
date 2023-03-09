import React from "react";
import { FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiTypescript, SiVtex, SiCss3 } from "react-icons/si";

import "./Icons.scss";
const Icons = () => {
    return (
        <div className="icons-container">
            <FaReact className="icon" title="React"/>
            <SiTypescript className="icon" title="TypeScript"/>
            <SiVtex className="icon" title="Vtex"/>
            <FaSass className="icon" title="Sass"/>
            <SiCss3 className="icon" title="CSS"/>
            <FaHtml5 className="icon" title="HTML"/>
          </div>
    )
}

export default Icons;