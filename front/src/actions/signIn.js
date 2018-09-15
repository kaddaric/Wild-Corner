import axios from 'axios';

export const signIn = (values) => {
  console.log("actions : ", values);
  
  return (dispatch) => {
    axios.put('http://localhost:5000/api/signin',  values)
      .then(res => {        
        dispatch({
          type: "CHECK_SIGN_IN",
          data: res.data,
        })
      })
  }
}