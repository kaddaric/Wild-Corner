import axios from 'axios';

export const signIn = (values) => {  
  return (dispatch) => {
    axios.put('/api/signin',  values)
      .then(res => {        
        dispatch({
          type: "CHECK_SIGN_IN",
          data: res.data,
        })
      })
  }
}