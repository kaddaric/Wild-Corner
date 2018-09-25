// Permet de simplifier les tests unitaires sur chaque composant "connectés"
// Le composant testé remplacera le {this.props.children}

import React, { Component } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(allReducers);

class RootTest extends Component {
  render() { 
    return (
      <Provider store= {store}>
        <MemoryRouter>
            {this.props.children}
        </MemoryRouter>
      </Provider>
    );
  }
}
 
export default RootTest;