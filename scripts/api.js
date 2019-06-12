'use strict';

let api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Adrienne';
  let getItems = function() {
    return fetch(`${BASE_URL}/items`);
  };
  let createItem = function(name) {
    let newItem = JSON.stringify({
      name
    });
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });
    // let newItemJSON = JSON.stringify(newItem);
    // console.log(newItemJSON);
  };
  return {getItems, createItem};
})();