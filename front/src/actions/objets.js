import axios from 'axios';

export const initData = () => {
  return (dispatch) => {
    axios.get('http://localhost:5000/api/objets')
      .then(res => {
        dispatch({
          type: "INIT_DATA",
          data: res.data,
        })
      })
  }
}

export const selectMyArticle = () => {
  return (dispatch) => {
    axios.get('http://localhost:5000/api/myarticles')
      .then(res => {
        dispatch({
          type: "SELECT_MY_ARTICLES",
          data: res.data,
        })
      })
  }
}

export function addArticle(values) {  
  return (dispatch) => {
    return (
      fetch("http://localhost:5000/api/myarticles/add", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(values)
      })
    );
  };  
}

export function searchArticle(values) {  
  return (dispatch) => {
    return (
      fetch("http://localhost:5000/api/search", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(values)
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        dispatch({
          type: "SEARCH_ARTICLES",
          data: json,
        })
      })
    );
  };
}

export function deleteMyArticle(id) {
  return (dispatch) => {
    return (
      axios.put('/api/myarticles/delete', {
        id
      })
      .then(res => {
        if (res.status === 200) {
          alert("l'article a été supprimé")
        }
      })
    );
  }
}