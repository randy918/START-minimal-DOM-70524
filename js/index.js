//?  ████████████████████████████████████  DATA

const endpoint = 'https://gist.githubusercontent.com/ Miserlou/c5cd8364bf9b2420bb29/ raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = [];

//_ ████████████████████████████████████  PROMISES

fetch(endpoint) 
.then(blob => blob.json())
.then(data => cities.push(...data))


//_ ████████████████████████████████████  FUNCTIONS

function findMatches(wordToMatch, cities) {

  const regex = new RegExp(wordToMatch, 'gi');
  return placeText.city.match(regex) || placeText.state.match(regex)

});

//_$ ████████████████████████████████████  QUERY SELECTORS

//^ ████████████████████████████████████  EVENT LISTENERS

//>  ████████████████████████████████████  REAL PROGRAM

//! ████████████████████████████████████  FILTER array example [filter results]



