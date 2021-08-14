'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function(country) {

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
//   request.send();
  
//   request.addEventListener('load', function() {
//     const data = JSON.parse(this.responseText)[0]
//     console.log(data);
    
//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//     </article>
//     `
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }
// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('Canada');

//! ~~~~~~~~~~~~~~~~~~~~~ Welcome To Callback Hell ~~~~~~~~~~~~~~~~~~~~~~~~~

// const renderCountry = function(data, className) {
//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//   <h3 class="country__name">${data.name}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//   <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//   <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
//   </article>
//   `
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// }

// const getCountryAndNeighborData = function(country) {

//   // AJAX Call Country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
//   request.send();
  
//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText) //?NOTE destructuring the array from the request
//     console.log(data);

//     // Render Country 1 
//     renderCountry(data);

//     // Get neighbor country (2)
//     const [neighbor] = data.borders;

//     if(!neighbor) return;

//     // AJAX Call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//     request2.send();

//     request2.addEventListener('load', function() {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour')
//     });
//   });
// };

// // getCountryAndNeighborData("portugal")
// getCountryAndNeighborData("usa")

//! ~~~~~~~~~~~~~~~~~ Promises and the Fetch API ~~~~~~~~~~~~~~~~~~~~~~~~~

// //* Dated method
//   // const request = new XMLHttpRequest();
//   // request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
//   // request.send();

// //* Modern version using FetchAPI

// const request = fetch(`https://restcountries.eu/rest/v2/name/portugal`)
// console.log(request);

//! ~~~~~~~~~~~~~~~~~~~~~~ Consuming Promises ~~~~~~~~~~~~~~~~~~~~~~~
const renderCountry = function(data, className) {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
  </article>
  `
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

// const getCountryData = function(country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   .then(function(response) {
//     console.log(response); //?NOTE we recieve a response from the API
//     return response.json(); //?NOTE the json() (asynchonrous, will also return a promise) method is available to all reponse objects coming from a fetch function
//   }).then(function(data) {
//     console.log(data); //?NOTE we grab the data from the response we called the json() method on (which was returned using a promise)
//     data.forEach((element) => {
//       renderCountry(element)
//     })
//     //* NOTE I called a foreach method on the data instead of simply using the 0th index to just return the first index (first country) of the data
//   })
// };


//* CLEANED UP VERSION

const getCountryData = function(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => data.forEach((element) => renderCountry(element)))
}

getCountryData('portugal')