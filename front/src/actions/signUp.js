import axios from 'axios';

export const signUp = (values) => {  
  return (dispatch) => {
    axios.post('/api/signup',  values)
      .then(res => { 
        dispatch({
          type: "CHECK_SIGN_IN",
          data: res.data,
        })
      })
  }
}