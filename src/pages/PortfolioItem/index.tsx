import React, { useState, useEffect} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PageFooter from '../../components/PageFooter';
import PageHeader from '../../components/PageHeader';
import PortfolioImage01 from '../../assets/img/portfolio01.jpeg';
import api from '../../services/api';
import { useHistory } from "react-router-dom";

type TParams = { id: string};

interface PortFolioItem {
  id: number,
  title: string,
  description: string,
  url: string,
  shortDescription: string,
  images: Images[]
}
interface Images {
  url: string,
  imageTitle: boolean
}

function PortFolioItem({ match }: RouteComponentProps<TParams>) {    
  const portFolioId = Number(match.params.id);  
  const [portfolioItem, setPortfolioItem] = useState<PortFolioItem | undefined>(undefined);
  const history = useHistory();  


  const getPortfolioData = () => {
    api.get(`/portfolio/${portFolioId}`)
      .then((response) => {
        console.log('response', response);    
        setPortfolioItem(response.data)    
      }).catch((error) => {
        console.error("Error response:");
        console.error(error.response.data);   
        console.error(error.response.status); 
        console.error(error.response.headers);
        if(error.response.status === 404) {          
          history.push('/404');          
        }
      }).then(() => {
        console.log('Portfolio Request Executed!')
      });
  };
  
  useEffect(getPortfolioData,[portFolioId]);

  return (
    <>
      <PageHeader />    
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          {portfolioItem?.title}
          <strong>of my project</strong>
        </h1>
        <p className="p.section__subtitle section__subtitle--intro">{portfolioItem?.shortDescription}</p>
        <img src={PortfolioImage01} className="intro__img" alt="a portfolio" />
      </section>

      <div className="portfolio-item-individual">
        <p>
          {portfolioItem?.description}
        </p>
        {portfolioItem?.images.map((image, index) => {
         return <img key={index} src={image.url} alt="portfolio" />
        })}        
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>        */}
      </div>

      <PageFooter />
    </>
  );
}

export default PortFolioItem;
