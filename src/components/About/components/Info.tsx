import React from "react";

import "./Info.scss";
import Icons from "./Icons";
const Info = () => {
  return (
    <section className="description">
      <h1 className="description__name">Nicolly Vieira</h1>
      <h3 className="description__job">Desenvolvedora Front-end Júnior</h3>
      <div>
        <p className="description__content">
          Olá, me chamo Nicolly Vieira, estou cursando o 5º período de Sistemas
          de Informação e sou Desenvolvedora Front-End Júnior.
        </p>
        <p className="description__content">
          Tenho experiência com React, TypeScript, SASS e plataforma VTEX.
        </p>
        <p className="description__content">
          Também possuo conhecimentos em: Java, API, Banco de Dados(SQL), Figma,
          Metodogias Ageis, Git e GitHub
        </p>
        <p className="description__content">
          Estou sempre em busca de novos conhecimentos e aperfeiçoar os que já
          sei. Me considero uma pessoa com facilidade de aprender, portanto
          aprender uma nova tecnologia não será um problema!
        </p>
      </div>
      <Icons />
    </section>
  );
};

export default Info;
