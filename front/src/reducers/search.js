

const initialState = [];

export function search(state = initialState, action) {

  let newState = [...state];

  switch (action.type) {

    case "SEARCH_ARTICLES":      
      newState = action.data;
      break;

    default:
      break;
  }

  return newState;
}