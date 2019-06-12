'use strict';

let api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Adrienne';
  let getItems = function() {
    // let error;
    return fetch(`${BASE_URL}/items`)
      // .then(res => {
      //   if(!res.ok) {
      //     error = {code: res.status};
      //   }
      //   return res.json();
      // })
      // .then(data => {
      //   if(error) {
      //     error.message = data.message;
      //     return Promise.reject(error);
      //   }
      //   return data;
      // });
  };


  let createItem = function(name) {
    // let error;
    let newItem = JSON.stringify({
      name
    });
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    })
      // .then(res => {
      //   if(!res.ok) {
      //     error = {code: res.status};
      //   }
      //   return res.json();
      // })
      // .then(data => {
      //   if(error) {
      //     error.message = data.message;
      //     return Promise.reject(error);
      //   }
      //   return data;
      // });
  };


  let updateItem = function(id, updateData){
    // let error;
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateData)
    })
      // .then(res => {
      //   if(!res.ok) {
      //     error = {code: res.status};
      //   }
      //   return res.json();
      // })
      // .then(data => {
      //   if(error) {
      //     error.message = data.message;
      //     return Promise.reject(error);
      //   }
      //   return data;
      // });
  };


  let deleteItem = function(id) {
    // let error;
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
      // .then(res => {
      //   if(!res.ok) {
      //     error = {code: res.status};
      //   }
      //   return res.json();
      // })
      // .then(data => {
      //   if(error) {
      //     error.message = data.message;
      //     return Promise.reject(error);
      //   }
      //   return data;
      // });
  };

  return {
    getItems, 
    createItem,
    updateItem,
    deleteItem
  };
})();