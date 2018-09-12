const initialState = [];

export function myArticles(state = initialState, action) {

  let newState = [...state];

  switch (action.type) {

    case "SELECT_MY_ARTICLES":      
      newState = action.data;
      break;

    default:
      break;
  }

  return newState;
}