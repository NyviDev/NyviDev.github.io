import React, { useEffect, useRef } from "react";
import "./Header.scss";
import Link from "../global/Link";
import List from "../global/List";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";

const Header = () => {
  const header = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const liContainers = header.current?.children[0].children[0].children;
    const about = document.querySelector(".about");
    
    window.addEventListener("scroll", () => {
      if (about) {
      if (window.scrollY > (about.clientHeight - 50)) {
        header.current?.classList.add("blue");

        if (liContainers) {
          Array.from(liContainers).forEach((e) => {
            e.children[0].classList.add("brown");
          });
        }
      } else {
        header.current?.classList.remove("blue");
        if (liContainers) {
          Array.from(liContainers).forEach((e) => {
            e.children[0].classList.remove("brown");
          });
        }
        }
      }
    });
  }, []);

  return (
    <header className="header" ref={header}>
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
              key={"github"}
            />,
            <Link
              key={"linkedin"}
              classN="header__link-content"
              content={<AiFillLinkedin />}
              href="https://www.linkedin.com/in/nicolly-vieira-dev/"
              title="LinkedIn"
            />,
            <Link
              key={"curriculo"}
              content={<MdContactPage />}
              classN="header__link-content"
              href="https://drive.google.com/file/d/1wBpY5ft8yXI82RHdhaXFvDzbY2BqfGHK/view?usp=sharing"
              title="Currículo"
            />,
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
