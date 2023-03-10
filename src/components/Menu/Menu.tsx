import React from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";
import List from "../global/List";

const Menu = () => {
  return (
    <nav className="menu">
      <List
        classNameUl="menu__ul-container"
        classNameLi="menu__li-link"
        contentLi={[
          // <NavLink to={"/"} className="link">Experiência</NavLink>,
          // <NavLink to={"/courses"} className="link">Cursos</NavLink>,
          <NavLink to={"/"} className="link">Projetos</NavLink>,
        ]}
      />
    </nav>
  );
};

export default Menu;
