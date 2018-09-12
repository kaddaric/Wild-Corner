import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
// import insertCss from 'insert-css';
import 'bootstrap/dist/css/bootstrap.min.css';

// try {
//   if (typeof document !== 'undefined' || document !== null) insertCss(css, { prepend: true });
// } catch (e) { }

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import MyArticles from './containers/MyArticles';
import AddArticle from './containers/AddArticle';
import Search from './containers/Search';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/myarticles/add" component={AddArticle} />
          <Route path="/myarticles" component={MyArticles} />
          <Route path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root'),
);
