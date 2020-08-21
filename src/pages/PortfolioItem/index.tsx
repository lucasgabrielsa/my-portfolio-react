import React, { useState, useEffect} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PageFooter from '../../components/PageFooter';
import PageHeader from '../../components/PageHeader';
import PortfolioImage01 from '../../assets/img/portfolio01.jpeg';
import PortfolioImage07 from '../../assets/img/portfolio07.jpeg';
import api from '../../services/api';

type TParams = { id: string };

interface PortFolioItem {
  id: number,
  name: string,
  description: string,
  url: string,
  images: string[]
}

function PortFolioItem({ match }: RouteComponentProps<TParams>) {  
  const portFolioId = Number(match.params.id);
  const [portfolioItem, setPortfolioItem] = useState<PortFolioItem | undefined>(undefined);

  useEffect(() => {
    api.get(`/portfolio/${portFolioId}`)
      .then((response) => {
        console.log('response', response);        
      }).then((error) => {
        console.error(error);
      })      
  }, []);

  return (
    <>
      <PageHeader />

      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          The title
          <strong>of my project</strong>
        </h1>
        <p className="p.section__subtitle section__subtitle--intro">A short subtitle</p>
        <img src={PortfolioImage01} className="intro__img" alt="a portfolio" />
      </section>

      <div className="portfolio-item-individual">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <img src={PortfolioImage07} alt="portfolio" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>

      <PageFooter />
    </>
  );
}

export default PortFolioItem;
