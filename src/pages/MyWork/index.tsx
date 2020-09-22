import React, { useEffect, useState } from 'react';
// import Portfolio01Image from '../../assets/img/portfolio01.jpeg';
// import Portfolio02Image from '../../assets/img/portfolio02.jpeg';
// import Portfolio03Image from '../../assets/img/portfolio03.jpeg';
// import Portfolio04Image from '../../assets/img/portfolio04.jpeg';
// import Portfolio05Image from '../../assets/img/portfolio05.jpg';
// import Portfolio06Image from '../../assets/img/portfolio06.jpeg';
// import Portfolio07Image from '../../assets/img/portfolio07.jpeg';
// import Portfolio08Image from '../../assets/img/portfolio08.jpeg';
// import Portfolio09Image from '../../assets/img/portfolio09.jpeg';
// import Portfolio10Image from '../../assets/img/portfolio10.jpeg';
import { Link } from 'react-router-dom';
import { PortFolioItemEntity } from '../../models';
import api from '../../services/api';

function MyWork() {
  const [portfolios, setPortfolios] = useState<PortFolioItemEntity[]>([]);

  const getPortfolioData = () => {
    api.get(`/portfolio`)
      .then((response) => {        
        setPortfolios(response.data.content)    
      }).catch((error) => {
        console.error("Error response:", error);        
      }).then(() => {
        console.log('Portfolios Request Executed!')
      });
  };
  
  useEffect(getPortfolioData,[]);

  console.log('portfolios', portfolios);
  

  return (
    <>
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">A collection of my range of work</p>

        <div className="portfolio">      

          {portfolios.map((item, index)=> {
            const linkToItem = `portfolio-item/${item.id}`            
            const keyItem = `port-${item.id}-${index}`
            return (
              <Link key={keyItem} to={linkToItem} className="portfolio__item">
                <img src={item.images[0]?.url} alt="" className="portfolio__img" />
              </Link> 
            );
          })}          

          {/* <Link to="#" className="portfolio__item">
            <img src={Portfolio10Image} alt="" className="portfolio__img" />
          </Link>  */}
        </div>
      </section>
    </>
  );
}

export default MyWork;
