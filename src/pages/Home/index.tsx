import React from 'react';
import PageHeader from '../../components/PageHeader';
import Introduction from '../Introduction';
import MyServices from '../MyServices';
import AboutMe from '../AboutMe';
import MyWork from '../MyWork';
import PageFooter from '../../components/PageFooter';

function Home() {
  return (
    <div>
      <PageHeader />

      <Introduction />

      <MyServices />

      <AboutMe />

      <MyWork />

      <PageFooter />
    </div>
  );
}

export default Home;
