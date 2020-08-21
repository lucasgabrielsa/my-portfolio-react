import React from 'react';
import Portfolio01Image from '../../assets/img/portfolio01.jpeg';
import Portfolio02Image from '../../assets/img/portfolio02.jpeg';
import Portfolio03Image from '../../assets/img/portfolio03.jpeg';
import Portfolio04Image from '../../assets/img/portfolio04.jpeg';
import Portfolio05Image from '../../assets/img/portfolio05.jpg';
import Portfolio06Image from '../../assets/img/portfolio06.jpeg';
import Portfolio07Image from '../../assets/img/portfolio07.jpeg';
import Portfolio08Image from '../../assets/img/portfolio08.jpeg';
import Portfolio09Image from '../../assets/img/portfolio09.jpeg';
import Portfolio10Image from '../../assets/img/portfolio10.jpeg';
import { Link } from 'react-router-dom';

function MyWork() {
  return (
    <>
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">A collection of my range of work</p>

        <div className="portfolio">

          <Link to="portfolio-item/1" className="portfolio__item">
            <img src={Portfolio01Image} alt="" className="portfolio__img" />
          </Link>

          <Link to="#" className="portfolio__item">
            <img src={Portfolio02Image} alt="" className="portfolio__img" />
          </Link>

          <Link to="#" className="portfolio__item">
            <img src={Portfolio03Image} alt="" className="portfolio__img" />
          </Link>

          <Link to="#" className="portfolio__item">
            <img src={Portfolio04Image} alt="" className="portfolio__img" />
          </Link>

          <Link to="#" className="portfolio__item">
            <img src={Portfolio05Image} alt="" className="portfolio__img" />
          </Link>

          <Link to="#" className="portfolio__item">
            <img src={Portfolio06Image} alt="" className="portfolio__img" />
          </Link>

          <Link to="#" className="portfolio__item">
            <img src={Portfolio07Image} alt="" className="portfolio__img" />
          </Link>

          <Link to="#" className="portfolio__item">
            <img src={Portfolio08Image} alt="" className="portfolio__img" />
          </Link>

          <Link to="#" className="portfolio__item">
            <img src={Portfolio09Image} alt="" className="portfolio__img" />
          </Link>

          <Link to="#" className="portfolio__item">
            <img src={Portfolio10Image} alt="" className="portfolio__img" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default MyWork;
