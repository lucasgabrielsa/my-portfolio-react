import React from 'react';
import LucasDevImage from '../../assets/img/dev-lucas.png';

function Introduction() {
  return (
    <>
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am
          <strong>Lucas Gabriel</strong>
        </h1>
        <p className="p.section__subtitle section__subtitle--intro">Software Engineer</p>
        <img src={LucasDevImage} alt="Lucas Gabriel smiling" className="intro__img" />
      </section>
    </>
  );
}

export default Introduction;
