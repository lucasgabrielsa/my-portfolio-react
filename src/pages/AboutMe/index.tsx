import React from 'react';
import DevLucas from '../../assets/img/dev-lucas4.jpg';

function AboutMe() {
  return (
    <>
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Full stack developer based out of Brazil</p>

        <div className="about-me__body">
          <p>
          Full Stack developer with many years of experience creating software for small businesses and even large corporations such as Unilever, B2W, Callink Solutions, Ilink Solutions and Fidelity Investments
          </p>
          <p>Main Skills: <br/>
          Important knowledge in Back-end: Java, Spring, NodeJs (Express)
          <br/>Front-end technologies: HTML5 / Javascript / Typescript, Angular, Angular JS and Vuejs
          Node.js, Yarn, NPM, SQL 
          <br/> Databases: MySQL, Oracle, SQL Server, Postgresql, MongoDB
          <br />Others Tools: GIT, SVN, JSON, XML, JIRA</p>
        </div>
        <img src={DevLucas} alt="Jane leaning against a bus" className="about-me__img" />
      </section>
    </>
  );
}

export default AboutMe;
