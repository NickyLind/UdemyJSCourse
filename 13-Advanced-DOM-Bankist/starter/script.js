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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  //?NOTE this finds the position in the DOM RELATIVE TO OUR CLIENT VIEWPORT where our section1 is (we want the top and left coordinates specifically)
  // console.log(s1coords);

  // console.log('Current scroll (X/Y', window.pageXOffset, window.pageYOffset);
  //?NOTE this tells us where our viewport is in relation to the window (the entire webpage) (we are specifically looking for the x and y offset of our viewport in relation to the entire window object)

  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth); 
  //?NOTE This tells us the width and height of our viewport (our client AKA what we're currently seeing from the webpage in our window)

  //* Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  //   );
  //?NOTE s1coords.left = how far left from the client viewport our section is
  //?NOTE s1coords.top = how far from the top of the viewport our seciton is
  //?NOTE window.pageXOffSet = The difference between the actual edge of the webpage and the client view port
  //?NOTE window.pageTOffset = The difference between the actual top of the webpage and the client viewport
  //?NOTE IN CONCLUSION, adding the values together gives us the true location of the object between our viewport and the window object
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth"
    //?NOTE creates a smooth scroll to the destination vs an immediate scroll
    //TODO ~~~~~~SEE IMAGE FOR CLARITY IN THESE NOTES~~~~~~
    //TODO  (./notesImg/"notes for smooth scrolling".png)
    //TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  });
});

//! ~~~~~~~~ Selecting, Creating, and Deleting Elements ~~~~~~~


// //* Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header'); //grabs first element that matches
// const allSections = document.querySelectorAll('.section') // grabs all matching elements
// console.log(allSections);

// document.getElementById('section--1') // pretty self-explainatory
// const allButtons = document.getElementsByTagName('button') //will grab all button elements
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// //* Creating and inserting elements
// // .insertAdjacentHTML

// const message = document.createElement('div');

// message.classList.add('cookie-message'); //creates a class
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

// header.append(message);
// // header.prepend(message);
// // header.append(message.cloneNode(true)) //will create two messages vs simply moving the prended message to an appended child element

// // header.before(message); //insert before as sibling
// // header.after(message); //insert after as sibling

// //* Deleting elements

// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   message.remove(); //NOTEmodern way
//   // message.parentElement.removeChild(message) //NOTEolder method
// });

//! ~~~~~~~~~~ Styles Attributes & Classes ~~~~~~~~~~~~~~

// //* Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.height); //can only read inline styles we have set using the styles propery
// console.log(message.style.backgroundColor); //will work since we set it above.

// console.log(getComputedStyle(message)); //this will give ALL values of css properties for passed in argument

// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered') // This changes the css properties that are in the :root class property. we can use these root properties to change anything they are applied to all at the same time

// //* Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'Beautiful Minimalist Logo'

// // Non-standard
// console.log(logo.designer); //will only read standard properties for the element
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');


// console.log(logo.src);
// console.log(logo.getAttribute('src'))

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// const btnLink = document.querySelector('.nav__link--btn');
// console.log(btnLink.href);
// console.log(btnLink.getAttribute('href'));

// // Data Attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'k');
// logo.classList.remove('c', 'k');
// logo.classList.toggle('c');
// logo.classList.contains('c'); //not includes

//! ~~~~~~~~~~~ Types of Events and Event Handlers ~~~~~~~

// const h1 = document.querySelector('h1');

// const alerth1 = (e) => {
//   alert('addEventListener: Great! You are reading the heading 😁')
// };


// h1.addEventListener('mouseenter', alerth1); //more modern method (allows us to add multiple listeners with multiple functions and can remove handler)

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alerth1)
// }, 3000);

//! ~~~~~~~~ Event Propogation in Practice ~~~~~~~~

// //* rgb(255,255,255)
// const randomInt = (min, max) => Math.floor(Math.random() * (max-min+1) + min);

// const randomColor = () => 
//   `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`

// // console.log(randomColor())

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //*Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
//   console.log('NAV', e.target, e.currentTarget);
// });

