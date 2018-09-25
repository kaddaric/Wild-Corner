import { combineReducers } from 'redux';
import { objets } from './objets';
import { myArticles } from './myArticles';
import { reducer as formReducer } from 'redux-form';
import { search } from './search';
import { signIn } from './signIn';


const allReducers = combineReducers({
  objets,
  myArticles,
  search,
  signIn,
  form: formReducer,
});

export default allReducers;