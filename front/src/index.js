import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import allReducers from './reducers';

import Home from './containers/Home';
import MyArticles from './containers/MyArticles';
import AddArticle from './containers/AddArticle';
import Search from './containers/Search';
import SignIn from './containers/SignIn';

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
          <Route exact path="/" component={SignIn}/>
          <Route path="/home" component={Home} />
          <Route path="/myarticles/add" component={AddArticle} />
          <Route path="/myarticles" component={MyArticles} />
          <Route path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root'),
);
