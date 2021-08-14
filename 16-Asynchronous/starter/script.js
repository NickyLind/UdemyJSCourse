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

const getCountryAndNeighborData = function(country) {

  // AJAX Call Country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
  request.send();
  
  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText) //?NOTE destructuring the array from the request
    console.log(data);

    // Render Country 1 
    renderCountry(data);

    // Get neighbor country (2)
    const [neighbor] = data.borders;

    if(!neighbor) return;

    // AJAX Call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`)
    request2.send();

    request2.addEventListener('load', function() {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour')
    });
  });
};

// getCountryAndNeighborData("portugal")
getCountryAndNeighborData("usa")
