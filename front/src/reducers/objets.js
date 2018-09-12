const initialState = [];

export function objets(state = initialState, action) {

  let newState = [...state];

  switch (action.type) {

    case "INIT_DATA":      
      newState = action.data;
      break;

    default:
      break;
  }

  return newState;
}