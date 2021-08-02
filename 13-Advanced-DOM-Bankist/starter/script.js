'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

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

//?NOTE the below method would get out of hand and reduce performance as it gets bigger so we instead use 'Event Delegation' where we delegate the event to a common parent and handle the event there
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href'); // will grab whatever "href"=
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

//* Using Event Delegation Method
//* 1) Add event listener to common parent element
//* 2) Determine what element originate the event
//* 3) Target only the children elements we are trying to add event listeners to

document.querySelector('.nav__links').addEventListener('click', function(e) {
  console.log(e.target); // remember event.target tells us where the event originated 
  // we need to make sure we only select the elements we are actually interested in (IE if we click the nav bar iteself instead of one of the links, we don't want it to do anything)
  //* Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    //?NOTE we see if the event target's class contains the class name we are looking for for our events
    e.preventDefault(); // prevent the default event behavior of the HTML anchor instant-scrolling to the selected DOM element
    const id = e.target.getAttribute('href'); //will grab the attribute that href=
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab'); //will grab the closest PARENT element equal to '.operations__tab'. (THis allows us to click the span containing the tab number and will grab the button still)
  // console.log(clicked);
  if(!clicked) return;
  //?NOTE GUARD CLAUSE
  //? If state that will return early if some condition is matched (if there is nothing clicked we want to finish this function(in our case if our clicked variable doesn't exist we want it to simply return))
  tabsContent.forEach(content => content.classList.remove('operations__content--active')); //This will remove the 'operations__content--active' class form all the tabsCOntent variable so we can only display the one that is clicked

  // Active Tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active')); //this removes the 'operations__tab--active' class from each of our tabs so only the one we click will animate upwards.
  clicked.classList.add('operations__tab--active'); //only the variable we targetted with our eventListener will animate

  // Activate Content Area
  console.log(clicked.dataset.tab); //remember we can create data properties in our HTML elements and have to access them with 'dataset' and then the value ('tab)
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active'); // this wil display the content of the active clicked tab using the data-tab property in each of the button elements
});

// Menu Fade Animation

// const handleHover = function(e, opacity) {
  //   if(e.target.classList.contains('nav__link')) {
    //     const link = e.target;
    //     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    //     const logo = link.closest('.nav').querySelector('img') // searching for any img element in the nav element
    
    //     siblings.forEach(el => {
      //       if (el !== link) el.style.opacity = opacity;
      //     });
      //     logo.style.opacity = opacity;
      // }};
      
      // nav.addEventListener('mouseover', (e) => {
        //   handleHover(e, 0.5);
        // });
        //?NOTEmouseenter does not bubble, mouseover does
        // nav.addEventListener('mouseout', (e) => {
          //   handleHover(e, 1);
          // });
          
//* using the bind method
const handleHover = function(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img') //searching for any img elementin the nav element

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  };
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


// Sticky Navigation (worse performance version)

// const initialCoords = section1.getBoundingClientRect(); //? dynamically grab where section 1 is located according to the viewport window and window size
// // console.log(initialCoords);
// window.addEventListener('scroll', () => {
//   //?NOTE using a scroll event isn't very good performance because it is constantly logging the event every time a minor scroll happens
//   // console.log(window.scrollY);
//   if(window.scrollY > initialCoords.top) { //? if the top of the viewport in relation to the top of section1 is gearter (if the viewport scrolls past the top of section1)
//     nav.classList.add('sticky') //? we add 'sticky' to the nav element class
//   } else {
//     nav.classList.remove('sticky') //? if we scroll back up the other direction past the top of section 1 we remove the sticky class and the nav bar disappears
//   }
// });

// Sticky Navigation (Intersection Observer API)

const header = document.querySelector('.header');

const stickyNav = function(entries) {
  const [entry] = entries;
  console.log(entry.intersectionRatio, entry.isIntersecting);
  if(entry.isIntersecting === false) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, //?NOTE this allows us to use the document's viewport as our observe container
  threshold: 0, //? the threshold will be zero percent (when 0 percent of the header we are observing is visible something will happen)
  rootMargin: '-90px' //?NOTE allows us to set a margin to the threshold (we set it to the size of our nav bar so when the amount of space below the header(90px) is available it will appear)
});
headerObserver.observe(header);

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

//! ~~~~~~~~~~~~~~~~~~~~~~~~~~ DOM Traversing ~~~~~~~~~~~~~~~~~~~~~~~~~

// const h1 = document.querySelector('h1');

//* Going Downwards: Child Elements
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white"
// h1.lastElementChild.style.color = "orangered"

//* Going Upwards: Parent Elements
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)' //recieves a query string like querySelector
// //?NOTE grabs the closest element with the specified query string (if there were multiple 'header' classes it would grab only the closest one)
// h1.closest('h1').style.background = 'var(--gradient-primary)'

// //?NOTE closest is almost like the opposite of querySelector:
// //? querySelector() grabs children no matter how deep in the DOM tree
// //? closest() grabs parents no matter how far up the DOM tree

//* Going Sideways: Sibling Elements
// console.log(h1.previousElementSibling); //grabs previous HTML element sibling
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling); //grabs previous Node element sibling
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// console.log(h1.parentNode.childNodes);
// [...h1.parentElement.children].forEach(function(el) {
//   if(el !== h1){
//     el.style.transform = "scale(0.5)"
//   };
// });

//! ~~~~~~~~~~~~~ Intersection Observer API ~~~~~~~~~~~~~~

// const observerCallback = (entries, observer) => {
//   entries.forEach(entry => {
//     console.log(entry.intersectionRatio, entry.isIntersecting);
//   });
// };

// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2]
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

