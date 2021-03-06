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

// //! ~~~~~~~~~~~~~~~~~~~~~~ Consuming Promises ~~~~~~~~~~~~~~~~~~~~~~~
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

// // const getCountryData = function(country) {
// //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
// //   .then(function(response) {
// //     console.log(response); //?NOTE we recieve a response from the API
// //     return response.json(); //?NOTE the json() (asynchonrous, will also return a promise) method is available to all reponse objects coming from a fetch function
// //   }).then(function(data) {
// //     console.log(data); //?NOTE we grab the data from the response we called the json() method on (which was returned using a promise)
// //     data.forEach((element) => {
// //       renderCountry(element)
// //     })
// //     //* NOTE I called a foreach method on the data instead of simply using the 0th index to just return the first index (first country) of the data
// //   })
// // };


// //* CLEANED UP VERSION

// const getCountryData = function(country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => data.forEach((element) => renderCountry(element)))
// }

// getCountryData('portugal')

//! ~~~~~~~~~~~~~~~~~~~~~~~~~ Chaining Promises ~~~~~~~~~~~~~~~~~~~~~~~~
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

// const getCountryData = function(country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((element) => {
//         renderCountry(element)
//         element.borders.forEach((neighborCountry) => {
//           // console.log(neighborCountry);
//           return fetch(`https://restcountries.eu/rest/v2/alpha/${neighborCountry}`)
//           .then(response => response.json())
//           .then(data => renderCountry(data, 'neighbour'));
//         })
//       })
//     })
// };

// getCountryData('USA')

//! ~~~~~~~~~~~~~~~~~~~ Handling Rejected Promises ~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
//   // countriesContainer.style.opacity = 1;
// }

// const renderError = function(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// }

// const getCountryData = function(country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => response.json()/*, error => alert(error)*/)
//     //?NOTE if you pass a second callback function into this method it will display the error
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];

//       if (!neighbor) return

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => {
//       console.error(`${error} 🙌🙌🙌`)
//       renderError(`Something went wrong: "${error.message}"`) 
//       //?NOTE any error created in JS has a message property
//       //?NOTE this catch block at the end of the chain will catch any errors made in the entire promise chain
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// }

// btn.addEventListener('click', function() {
//   getCountryData('USA')
// })

//* THEN >>> runs when promise is fulfilled
//* CATCH >>> runs when promise is rejected
//* FINALLY >>> runs no matter what

//! ~~~~~~~~~~~~~~~~~~~~~~~~~ Throwing Errors Manually ~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
//   // countriesContainer.style.opacity = 1;
// };

// const renderError = function(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// const getJSON = function(url, errorMsg = 'Something went wrong:') {
//   return fetch(url).then(response => {
//     if(!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// //* unDRY version
// // const getCountryData = function(country) {
// //   // Country 1
// //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
// //     .then((response) => {
// //       console.log(response);

// //       if(!response.ok) throw new Error(`Country not found (${response.status})`)
// //       return response.json()/*, error => alert(error)*/
// //     })
// //     //?NOTE if you pass a second callback function into this method it will display the error
// //     .then((data) => {
// //       renderCountry(data[0]);
// //       // const neighbor = data[0].borders[0];
// //       const neighbor = 'asjasd'

// //       if (!neighbor) return

// //       // Country 2
// //       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
// //     })
// //     .then(response => {
// //       if(!response.ok) throw new Error(`Country not found (${response.status})`)
// //       return response.json()
// //     })
// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(error => {
// //       console.error(`${error} 🙌🙌🙌`)
// //       renderError(`Something went wrong: "${error.message}"`) 
// //       //?NOTE any error created in JS has a message property
// //       //?NOTE this catch block at the end of the chain will catch any errors made in the entire promise chain
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     })
// // }

// const getCountryData = function(country) {
//   // Country 1
//   getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];
//       // const neighbor = 'asjasd'

//       if (!neighbor) throw new Error('No neighbor found!')
      
//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
//         'Country not found'
//         )
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => {
//       console.error(`${error} 🙌🙌🙌`)
//       renderError(`Something went wrong: "${error.message}"`) 
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// };

// btn.addEventListener('click', function() {
//   getCountryData('usa')
// });

// getCountryData('australia')

//! ~~~~~~~~~~~~~~~~~~~~ CODING CHALLENGE #1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// /* 
// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// Here are your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// GOOD LUCK 😀
// */

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
// };

// const whereAmI = function(lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   .then(response => {
//     if(!response.ok) throw new Error(`Problem with geocoding: ${response.status}`)
//     return response.json()
//   })
//   .then(data => {
//     console.log(data);
//     console.log(`You are in ${data.city}, ${data.country}`);

//     return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
//   })
//   .then(response => {
//     if(!response.ok) throw new Error(`Country not found ${response.status}`)
//     return response.json();
//   })
//   .then(data => 
//     renderCountry(data[0])
//   )
//   .catch(error => console.error(`${error.message} 🐱‍💻`))
//   .finally(
//     countriesContainer.style.opacity = 1
//   )
// };

// whereAmI(52.508, 13.381);
// setTimeout(() => {
//   whereAmI(19.037, 72.873);
//   setTimeout(() => {
//     whereAmI(-33.933, 18.474);
//   }, 1000);
// }, 1000);

//! ~~~~~~~~~~~~~~~~~~~~~~ The Event Loop in Practice ~~~~~~~~~~~~~~~~~~~~~~~~

// console.log('Test Start');

// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);
// Promise.resolve('Resolved promise 1').then(response => console.log(response));
// Promise.resolve('Resolved Promise 2').then(response => {
//   for (let i = 0; i < 10000; i ++) {
//   }
//   console.log(response)
// });
// console.log('Test end');

//! ~~~~~~~~~~~~~~~~~~~~~ Building a Simple Promise ~~~~~~~~~~~~~~~~~~~~~~~~~

// // const lotteryPromise = new Promise(function(resolve, reject) {
// //   console.log('Lottery results are about to display...');
// //   setTimeout(() => {
// //     if(Math.random() >= 0.5) {
// //       resolve('You Win! ✨🎉') //?NOTE fulfilled/resolved promise, to made available in the .then handler
// //     } else {
// //       reject(new Error('You lose! 😂')) //? rejected promise, to made available in the .catch handler
// //       //?NOTE when you handle the rejection as an Error it will actually display and error that shows where the error occured in the script
// //     }
// //   }, 2000);
// // });

// // lotteryPromise.then(resolve => console.log(resolve)).catch(error => console.error(error))


// //* Promisifying setTimeout
// const wait = function(seconds) {
//   return new Promise(function(resolve) {
//   //? dont need a reject because timer won't fail
//     setTimeout(resolve, seconds * 1000)
//   });
// };

// // wait(2).then(() => {
// //   console.log('I waited for 2 seconds');
// //   return wait(1);
// // }).then(() => console.log('I waited for 1 second'));

// //* Example of using asynchronous behavior instead of Callback Hell
// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 seconds passed');
//     return wait(1);
//   })
// .then(() => console.log('I waited for 5 seconds'));

// Promise.resolve('abc').then(x => console.log(x));
// //?NOTE static method on promise constructor that we can pass a resolve value, and will be resolved immediately
// Promise.reject(new Error('abc')).catch(x => console.error(x));

//! ~~~~~~~~~~~~~~~~~~ Promisifying the geolocation API ~~~~~~~~~~~~~~~~~~~~~~~~~


// const getPosition = function() {
//   return new Promise(function(resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   error => reject(error)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   })
// };

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
// };

// const whereAmI = function() {
//   getPosition()
//   .then(position => {
//     const {latitude: lat, longitude: lng} = position.coords
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   })
//   .then(response => {
//     if(!response.ok) throw new Error(`Problem with geocoding: ${response.status}`)
//     return response.json()
//   })
//   .then(data => {
//     console.log(data);
//   console.log(`You are in ${data.city[0] + data.city.slice(1).toLowerCase()}, ${data.state} ${data.country}`);

//     return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
//   })
//   .then(response => {
//     if(!response.ok) throw new Error(`Country not found ${response.status}`)
//     return response.json();
//   })
//   .then(data => 
//     renderCountry(data[0])
//   )
//   .catch(error => console.error(`${error.message} 🐱‍💻`))
//   .finally(
//     countriesContainer.style.opacity = 1
//   )
// };

// btn.addEventListener('click', whereAmI)

//! ~~~~~~~~~~~~~~~~~~~~~~~~~~~ CODING CHALLENGE #2 ~~~~~~~~~~~~~~~~~~~~~~~

// /* 
// Build the image loading functionality that I just showed you on the screen.

// Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

// PART 1
// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

// If this part is too tricky for you, just watch the first part of the solution.

// PART 2
// 2. Comsume the promise using .then and also add an error handler;
// 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
// 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
// 5. After the second image has loaded, pause execution for 2 seconds again;
// 6. After the 2 seconds have passed, hide the current image.

// TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

// GOOD LUCK 😀
// */

// const wait = function(seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   })
// }

// const imgContainer = document.querySelector('.images');

// const createImage = function(imgPath) {
//   return new Promise(function(resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function() {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function() {
//       reject(new Error('Image not found'))
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image loaded');
//     return wait(2)
// })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image loaded');
//     return wait(2)
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

//! ~~~~~~~~~~~~~~~~~~~ Consuming Promises w/ Async/Await ~~~~~~~~~~~~~~~~~~~~~~~~
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
// };

// const getPosition = function() {
//   return new Promise(function(resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function() {
//   // Geolocation
//   const pos = await getPosition();
//   const {latitude: lat, longitude: lng} = pos.coords

//   // Reverse Geocoding
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   // Country Data
//   const response = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
//   console.log(response);
  
//   const data = await response.json();
//   console.log(data[0]);
//   renderCountry(data[0]);
// };

//   //?NOTE async/await is just syntatic sugar for consuming promises using .then()~~
//   // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then( res => {return res.json()}).then(data => renderCountry(data[0]))
//   //?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// whereAmI();
// console.log('FIRST'); 

//! ~~~~~~~~~~~~~~~~~ Error Handling with Try...catch ~~~~~~~~~~~~~~~~~~~~~~

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
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getPosition = function() {
//   return new Promise(function(resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function() {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const {latitude: lat, longitude: lng} = pos.coords

//     // Reverse Geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     if(!resGeo.ok) throw new Error('"Problem getting location data"')
//     //?NOTE we manually throw an error if this fetch doesn't come back with a 200/ok so we know specifically what went wrong and this gets displayed as the error.message in the catch block

//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     // Country Data
//     const response = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
//     if(!response.ok) throw new Error('"Problem getting country data"')
//     console.log(response);
    
//     const data = await response.json();
//     console.log(data[0]);
//     renderCountry(data[0]);
//   } catch(error) {
//     console.error(`ERROR: ${error.message}`)
//     renderError(`Something went wrong 😕 ${error.message}`)
//   }
// };

//   //?NOTE async/await is just syntatic sugar for consuming promises using .then()~~
//   // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then( res => {return res.json()}).then(data => renderCountry(data[0]))
//   //?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// whereAmI();
// console.log('FIRST'); 


// //* Basic Try-catch block
// // try {
// //   let y = 1;
// //   const x = 2;
// //   x = 3;
// // } 
// // catch(error) {
// //   console.error(`ERROR: ${error.message}`)
// // }

//! ~~~~~~~~~~~~~~~~~~~~~~~ Returning Values from Async Functions ~~~~~~~~~~~~~~~~~~

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
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getPosition = function() {
//   return new Promise(function(resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function() {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const {latitude: lat, longitude: lng} = pos.coords

//     // Reverse Geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     if(!resGeo.ok) throw new Error('"Problem getting location data"')
//     const dataGeo = await resGeo.json();

//     // Country Data
//     const response = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
//     if(!response.ok) throw new Error('"Problem getting country data"')
    
//     const data = await response.json();
//     renderCountry(data[0]);

//     return `2: You are in ${dataGeo.city[0] + dataGeo.city.slice(1).toLowerCase()} ${dataGeo.state}, ${dataGeo.country}.`
//   } catch(error) {
//     console.error(`2: ERROR: ${error.message}`)
//     renderError(`Something went wrong 😕 ${error.message}`)

//     // Reject Promise returned from async function
//     throw error;
//     //?NOTE because we are returning the promise as fulfilled in line 788 as a result of this whereAmI function being called we have to throw the error manually since it never 
//   }
// };

//   console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);

// //* Mixes using Async/await with Then/Catch
// // whereAmI()
// //   .then(city => console.log(city))
// //   .catch(error => console.error(error))
// //   .finally(() => console.log('3: Finished getting location'));

//   //* IIFE (Immediately Invoked Function Expressions) (one of the last use-cases for one is this example)
//   (async function() {
//     try {
//       const city = await whereAmI();
//       console.log(city);
//     } catch(error) {
//       console.error(`2: ERROR: ${error.message}`)
//     }
//     console.log('3: Finished getting lcoation');
//   })();

//! ~~~~~~~~~~~~~~~~~~~~~ Running Promises in Parallel ~~~~~~~~~~~~~~~~~~~~~~~
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// }

// const get3Countries = async function(c1, c2, c3) {
//   try{
//     // const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`)
//     // const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`)
//     // const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)

//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
//     ])
//     //?NOTE this function takes in an array of promises, and it will return a new promise, which will then run all the promises in the array at the same time
//     // console.log([data1.capital, data2.capital, data3.capital]);
//     console.log(data);
//     console.log(data.map(data => data[0].capital));
//     //! If one promise rejects, then the entire Promise.all() function will reject
//   } catch(error) {
//     console.error(`ERROR: ${error.message}`)
//   }
// }
// get3Countries('portugal', 'canada', 'tanzania')

//! ~~~~~~~~~ Other Promise Combinators: race, allSettled, and any ~~~~~~~~~~~~~~~
// //?NOTE all combinators recieve an array of promises and then return a single promise  

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// //* Promise.race()
// //?NOTE the first settled promise gets returned (whether resovled or rejected)
// (async function() {
//   const response = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`)
//   ]);
//   console.log(response[0]);
// })();


// //* Example of setting a timeout in a race method so a slow internet connection will timeout rather than wait forever for the fetch
// //* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const timeout = function(sec) {
//   return new Promise(function(_, reject) {
//     setTimeout(function() {
//       reject(new Error('request took too long'))
//     }, sec * 1)
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
//   timeout(1)
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err))
// //* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// //* Promise.allSettled()
// //?NOTE takes in an array of promises and will return an array of all SETTLED promises (whether rejected or not)
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Failed'),
//   Promise.resolve('Another Success')
// ])
//   .then(res => console.log(res))


// //* Promise.all
// //?NOTE takes in an array of promises and will return either all resolved promises or will short circuit and show an error
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Failed'),
//   Promise.resolve('Another Success')
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err))

// //* Promise.any [ES2021]
// //?NOTE takes in an array of multiple Promsies and will return the first fulfilled promise, ignoring rejected promises

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Failed'),
//   Promise.resolve('Another Success')
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err))

//! ~~~~~~~~~~~~~~~~~~~~~~~ CODING CHALLENGE #3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function() {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function() {
      reject(new Error('Image not found'))
    });
  });
};

const wait = function(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');


//* PART 1
const loadNPause = async function () {
  try {
    // Load Image 1
    let img = await createImage('img/img-1.jpg');
    console.log('image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load Image 2
    img = await createImage('img/img-2.jpg');
    console.log('image 2 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load Image 3
    img = await createImage('img/img-3.jpg');
    console.log('image 3 loaded');
    await wait(2);
    img.style.display = 'none';

  } catch(err) {
    console.error(`ERROR: ${err.message}`)
  }
}
// loadNPause();

//* PART 2
const loadAll = async function(imgArr) {
  try{
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs);

    const imgsEl = await Promise.all(imgs)
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'))
  } catch(err) {
    console.error(err)
  }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])



// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image loaded');
//     return wait(2)
// })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image loaded');
//     return wait(2)
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));