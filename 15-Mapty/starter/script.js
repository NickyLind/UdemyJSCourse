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
  }, function() {
    alert('Could not retrieve position')
  });
};