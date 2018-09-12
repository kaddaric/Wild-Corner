import { combineReducers } from 'redux';
import { objets } from './objets';
import { myArticles } from './myArticles';
import { reducer as formReducer } from 'redux-form';
import { search } from './search';


const allReducers = combineReducers({
  objets,
  myArticles,
  search,
  form: formReducer,
  formsearch: formReducer,
});

export default allReducers;