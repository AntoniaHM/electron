import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Index from './pages';
import Detail from './pages/detail';
import News from './pages/news';
import Data from './pages/data';
import store from './Store.js';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

const createElement = (Component, props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

const history = syncHistoryWithStore(browserHistory, store);

const Routes = () => (
  <Router history={history} createElement={createElement}>
  <Route path="/" exact component={() => <Index history={history} />} />
  <Route path="data" component={() => <Data history={history} />} />
  <Route path="news" component={() => <News history={history} />} />
  <Route path="detail" component={() => <Detail history={history} />} />
  </Router>
);

export default Routes;
