'use strict';

let api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Adrienne';
  function getItems(){
    console.log(Promise.resolve('A successful ressponse!'));
    fetch(`${BASE_URL}/items`)
  }
  return {getItems};
})();