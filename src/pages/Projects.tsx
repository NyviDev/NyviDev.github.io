import React, { useEffect, useState } from "react";
import { DiGitBranch } from "react-icons/di";
import { AiOutlineLink } from "react-icons/ai";
import Link from "../components/global/Link";
import "./Projects.scss";

interface DataRepositories {
  name: string;
  html_url: string;
  description: string;
  homepage?: string;
}

const Projects = () => {
  const [repositories, setRepositories] = useState<DataRepositories[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/NyviDev/repos")
      .then((resp) => resp.json())
      .then((data) => setRepositories(data));
  }, []);
  return (
    <div className="projects">
      <h1 className="projects__title">PROJETOS</h1>

      <div className="projects__wrapper">
        {repositories.map((e, i) => {
          return (
            <article key={i} className="projects__container">
              <h2 className="projects__title-card">{e.name}</h2>
              <p className="projects__description">{e.description}</p>
              <div className="projects__links-container">
                <div className="projects__link-wrapper">
                  <DiGitBranch />
                  <Link
                    classN="projects__link"
                    href={e.html_url}
                    content="Repositório"
                  />
                </div>
                {e.homepage && (
                  <div className="projects__link-wrapper">
                    <AiOutlineLink/>
                    <Link
                      classN="projects__link"
                      href={e.homepage}
                      content="HomePage"
                    />
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
