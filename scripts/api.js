'use strict';

let api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Adrienne';
  
  let listApiFetch = function(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = {code: res.status};
          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

  let getItems = function() {
    return listApiFetch(`${BASE_URL}/items`);
  };


  let createItem = function(name) {
    let newItem = JSON.stringify({
      name
    });
    return listApiFetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newItem
    });
  };


  let updateItem = function(id, updateData){
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateData)
    });
  };


  let deleteItem = function(id) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
    });
  };

  return {
    getItems, 
    createItem,
    updateItem,
    deleteItem
  };
}());