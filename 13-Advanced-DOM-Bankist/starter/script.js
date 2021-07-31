'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', openModal)
})
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//! ~~~~~~~~ Selecting, Creating, and Deleting Elements ~~~~~~~


//* Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); //grabs first element that matches
const allSections = document.querySelectorAll('.section') // grabs all matching elements
console.log(allSections);

document.getElementById('section--1') // pretty self-explainatory
const allButtons = document.getElementsByTagName('button') //will grab all button elements
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//* Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');

message.classList.add('cookie-message'); //creates a class
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

header.append(message);
// header.prepend(message);
// header.append(message.cloneNode(true)) //will create two messages vs simply moving the prended message to an appended child element

// header.before(message); //insert before as sibling
// header.after(message); //insert after as sibling

//* Deleting elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove(); //NOTEmodern way
  // message.parentElement.removeChild(message) //NOTEolder method
});

//! ~~~~~~~~~~ Styles Attributes & Classes ~~~~~~~~~~~~~~

//* Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.height); //can only read inline styles we have set using the styles propery
console.log(message.style.backgroundColor); //will work since we set it above.

console.log(getComputedStyle(message)); //this will give ALL values of css properties for passed in argument

console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered') // This changes the css properties that are in the :root class property. we can use these root properties to change anything they are applied to all at the same time

//* Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful Minimalist Logo'

// Non-standard
console.log(logo.designer); //will only read standard properties for the element
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');


console.log(logo.src);
console.log(logo.getAttribute('src'))

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const btnLink = document.querySelector('.nav__link--btn');
console.log(btnLink.href);
console.log(btnLink.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'k');
logo.classList.remove('c', 'k');
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes

