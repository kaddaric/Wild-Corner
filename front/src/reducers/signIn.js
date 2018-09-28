const initialState = {
  id: 0,
  login: "",
  password: "",
  isLogged: false,
};

export function signIn(state = initialState, action) {

  let newState = {...state};

  switch (action.type) {

    case "CHECK_SIGN_IN":      
      newState = action.data;
      break;

    case "RESET_CONNEXION":
      newState = initialState;
      break;
      
    default:
      break;
  }

  return newState;
}