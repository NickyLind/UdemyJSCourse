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

