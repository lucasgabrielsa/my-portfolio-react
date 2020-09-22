import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Page404 from './pages/Page404';
import PortFolioItem from './pages/PortfolioItem';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/portfolio-item/:id" component={PortFolioItem} />
      <Route path="/404" component={Page404} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
