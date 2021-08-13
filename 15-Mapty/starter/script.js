'use strict';





class Workout {
  date = new Date();
  id = (Date.now() + ' ').slice(-10);

  constructor(coords, distance, duration){
    this.coords = coords; // lat, lng
    this.distance = distance; // in mi
    this.duration = duration; // in min
  };

  _setDescription() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
  }
};

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration); // super allows us to initialize the this keyword for the class
    this.cadence = cadence;
    this.calcPace() //will run this method any time an instance is created
    this._setDescription();
  };

  calcPace() {
    // min/mi
    this.pace = this.duration / this.distance
    return this.pace;
  };
};

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.calcSpeed();
    this._setDescription();
  };

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60)
    return this.speed
  };
};

// const run1 = new Running([39, -121], 5.2, 24, 178)
// const cycle1 = new Cycling([39, -121], 27, 95, 523)

// console.log(run1, cycle1);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// APPLICATION ARCHITECTURE
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition(); //We throw this in the constructor so that it runs as soon as an instance of the App Class is created

    form.addEventListener('submit', this._newWorkout.bind(this)); // 'this' in an event listener always points to the DOM element it is attached to so we need to bind 'this' to our App object
    inputType.addEventListener('change', this._toggleElevationField)
  }

  _getPosition() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function() {
        //?NOTE the navigator.geolocation api's getCurrentPosition method takes 2 arguments. The first is a callback function for for when the call succeeds the 2nd is a callback function for when it fails
        //?NOTE we need to bind the this keyword to the object that the '_loadMap' function belongs to
        alert('Could not retrieve position')
      });
    };
  }

  _loadMap(position) {
      const { latitude } = position.coords
      const { longitude } = position.coords
      // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      const coords = [latitude, longitude];
      
      console.log(this);
      this.#map = L.map('map').setView(coords, 13);
      // console.log(map);
      //?NOTE 'L' is the global variable object imported from the Leaflet script that gives us access to all it's methods.
      //?NOTE the first parameter in the setView method is the coordinates, while the second parameter is the starting zoom on the coordinates
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.#map);
      // Handling clicks on map
      this.#map.on('click', this._showForm.bind(this));
      //?NOTE 'map' is the variable we stored the loaded map data, here we call the 'on()' method that we recieve from the leaflet library
  }

  _showForm(mapE) {
    this.#mapEvent = mapE; //sets the global mapEvent state to the event from this click handler
    //?NOTE just like in JavaScript how we get access to an 'event' form an event listener, the 'on()' listener gives us access to an event using leaflet as well
    form.classList.remove('hidden'); //remove our hidden from the form div to show it
    inputDistance.focus(); //puts the cursor in the inputDistance query selection
  }

  _hideForm() {
    //Empty inputs
    inputDistance.value = inputDuration.value = inputElevation.value = inputCadence.value = '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => form.style.display = 'grid', 1000);
  }
  
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    //? going toward parent elements, finds the closes parent with the 'form_row' class name and then toggles the 'form__row--hidden' class name off and on 
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  
  _newWorkout(e) {
    e.preventDefault() //need to prevent the default action of a form submit (page reload)
    const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))
      //?NOTE this will loop through our array of inputs that we have into the function and see if EVERY element in the array is a number if ANY are not it will return false
    
    const allPositive = (...inputs) => inputs.every(inp => inp >= 0)
    //?NOTE Helper Method for determining is value is positive
    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value; // + converts string to number
    const duration = +inputDuration.value;  
    const {lat, lng} = this.#mapEvent.latlng;
    let workout;

    
    
    //If activity running, create running object
    if(type === 'running') {
      const cadence = +inputCadence.value;
      //Check if data is valid
      if(
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
        ) 
        return alert('Inputs have to be positive numbers!');
      //?NOTE "if validInputs returns false do this:"
        
      //?NOTE Guadrian Clause (if the opposite of what we're looking for is true, we immediately return)
      //?NOTE Number.isFinite() checks to see if the passed in value is a number
        workout = new Running([lat, lng], distance, duration, cadence);
      };
      
      //If activity is cycling, create a cycling object
      if(type === 'cycling') {
        const elevation = +inputElevation.value;
        if(
          !validInputs(distance, duration, elevation) ||
          !allPositive(distance, duration)
          ) 
          return alert('Inputs have to be positive numbers')
          
  
          workout = new Cycling([lat, lng], distance, duration, elevation);
      };
      
      //add new object to the workout array
      this.#workouts.push(workout);
      console.log(workout);

    //Render workout on map as a marker
    console.log(this.#mapEvent);
    this._renderWorkoutMarker(workout)
    
    //render workout on list
    this._renderWorkout(workout);

    // hide form + clear inut fields
    this._hideForm()
    
      // Display Marker
  };

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
    .addTo(this.#map)
    .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`
      }))
    .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'}${workout.description}`)
    .openPopup();
  };

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title>${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'}</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⌚</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
    `;

    if(workout.type === 'running') {
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
      `
    }

    if(workout.type === 'cycling') {
      html += `
      <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevation}</span>
            <span class="workout__unit">m</span>
          </div>
        </li> 
      `
    }
    form.insertAdjacentHTML('afterend', html);
  }
}          

const app = new App(); // create an instance of our App Class



