'use strict';

let api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Adrienne';
  function getItems(){
    return Promise.resolve('A successful ressponse!');
  }
  return {getItems};
})();