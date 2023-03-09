import React from "react";
import "./Header.scss";
import Link from "../global/Link";
import List from "../global/List";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <List
          classNameUl="header__links-container"
          classNameLi="header__link"
          contentLi={[
            <Link
              classN="header__link-content"
              content="Github"
              href="https://github.com/NyviDev"
            />,
            <Link
              classN="header__link-content"
              content="LinkedIn"
              href="https://www.linkedin.com/in/nicolly-vieira-dev/"
            />,
            <Link
              content="Currículo"
              classN="header__link-content"
              href="https://drive.google.com/file/d/1wBpY5ft8yXI82RHdhaXFvDzbY2BqfGHK/view?usp=share_link"
            />,
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
