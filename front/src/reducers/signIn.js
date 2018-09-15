const initialState = {
  login: "",
  isLogged: false,
};

export function signIn(state = initialState, action) {

  let newState = {...state};

  switch (action.type) {

    case "CHECK_SIGN_IN":      
      newState = action.data;
      break;

    default:
      break;
  }

  return newState;
}