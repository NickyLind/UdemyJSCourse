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

let map, mapEvent;

if(navigator.geolocation) {
  //? the navigator.geolocation api's getCurrentPosition method takes 2 arguments. The first is a callback function for for when the call succeeds the 2nd is a callback function for when it fails
  navigator.geolocation.getCurrentPosition(function(position) {
    const { latitude } = position.coords
    const { longitude } = position.coords
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    map = L.map('map').setView(coords, 13);
    // console.log(map);
    //?NOTE 'L' is the global variable object imported from the Leaflet script that gives us access to all it's methods.
    //?NOTE the first parameter in the setView method is the coordinates, while the second parameter is the starting zoom on the coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // Handling clicks on map
    map.on('click', function(mapE) {
      mapEvent = mapE; //sets the global mapEvent state to the event from this click handler
      //?NOTE just like in JavaScript how we get access to an 'event' form an event listener, the 'on()' listener gives us access to an event using leaflet as well
      form.classList.remove('hidden'); //remove our hidden from the form div to show it
      inputDistance.focus(); //puts the cursor in the inputDistance query selection

    });
    //?NOTE 'map' is the variable we stored the loaded map data, here we call the 'on()' method that we recieve from the leaflet library
  }, function() {
    alert('Could not retrieve position')
  });
};

form.addEventListener('submit', function(e) {
  e.preventDefault() //need to prevent the default action of a form submit (page reload)

  // Clear Input Fields
  inputDistance.value = inputDuration.value = inputElevation.value = inputCadence.value = '';

  // Display Marker
  console.log(mapEvent);
  const {lat, lng} = mapEvent.latlng;
  //?NOTE we move the L.marker functionality into our submit event and destructure the lat and longitude from it 
  L.marker([lat, lng])
  .addTo(map)
  .bindPopup(L.popup({
    maxWidth: 250,
    minWidth: 100,
    autoClose: false,
    closeOnClick: false,
    className: 'running-popup'
  }))
  .setPopupContent('Placeholder text')
  .openPopup();
  form.classList.add('hidden');
});

inputType.addEventListener('change', function() {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  //? going toward parent elements, finds the closes parent with the 'form_row' class name and then toggles the 'form__row--hidden' class name off and on 
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});