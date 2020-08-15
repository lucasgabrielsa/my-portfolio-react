import React from 'react';

function MyWork() {
  return (
    <>
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">A collection of my range of work</p>

        <div className="portfolio">

          <a href="portfolio-item.html" className="portfolio__item">
            <img src="imgs/portfolio01.jpeg" alt="" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="imgs/portfolio02.jpeg" alt="" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="imgs/portfolio03.jpeg" alt="" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="imgs/portfolio04.jpeg" alt="" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="imgs/portfolio05.jpg" alt="" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="imgs/portfolio06.jpeg" alt="" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="imgs/portfolio07.jpeg" alt="" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="imgs/portfolio08.jpeg" alt="" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="imgs/portfolio09.jpeg" alt="" className="portfolio__img" />
          </a>

          <a href="#" className="portfolio__item">
            <img src="imgs/portfolio10.jpeg" alt="" className="portfolio__img" />
          </a>
        </div>
      </section>
    </>
  );
}

export default MyWork;
