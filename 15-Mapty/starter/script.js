'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if(navigator.geolocation) {
  //? the navigator.geolocation api's getCurrentPosition method takes 2 arguments. The first is a callback function for for when the call succeeds the 2nd is a callback function for when it fails
  navigator.geolocation.getCurrentPosition(function(position) {
    const { latitude } = position.coords
    const { longitude } = position.coords
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    const map = L.map('map').setView(coords, 13);
    //?NOTE 'L' is the global variable object imported from the Leaflet script that gives us access to all it's methods.
    //?NOTE the first parameter in the setView method is the coordinates, while the second parameter is the starting zoom on the coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker(coords).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
  }, function() {
    alert('Could not retrieve position')
  });
};