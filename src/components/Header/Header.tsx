import React from "react";
import "./Header.scss";
import Link from "../global/Link";
import List from "../global/List";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";

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
              content={<AiOutlineGithub />}
              href="https://github.com/NyviDev"
              title="Github"
            />,
            <Link
              classN="header__link-content"
              content={<AiFillLinkedin />}
              href="https://www.linkedin.com/in/nicolly-vieira-dev/"
              title="LinkedIn"
            />,
            <Link
              content={<MdContactPage />}
              classN="header__link-content"
              href="https://drive.google.com/file/d/1wBpY5ft8yXI82RHdhaXFvDzbY2BqfGHK/view?usp=share_link"
              title="Currículo"
            />,
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
