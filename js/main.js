// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}


var lang = {
  "html": "100%",
  "css": "90%",
  "Bootstrap" : "92%",
  "javascript": "75%",
  "Ajax" : "80%",
  "php": "85%",
  "angular": "40%",
  "ES6" : "74%",
  "Python": "90%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});



var ap = {
  "pc": "83%",
  "lli": "88%",
  "pr" : "62%",
  "li": "50%",
};

var multiplyy = 4;

$.each( ap, function( app, pourcentt) {

  var delayy = 700;
  
  setTimeout(function() {
    $('#'+app+'-pourcent').html(pourcentt);
  },delayy*multiplyy);
  
  multiplyy++;

});


var mi = {
  "Word": "99%",
  "Excel": "90%",
  "PowerPoint" : "94%",
};

var multiplyyy = 4;

$.each( mi, function( soft, pourcenttt) {

  var delayyy = 700;
  
  setTimeout(function() {
    $('#'+soft+'-pourcent').html(pourcenttt);
  },delayyy*multiplyyy);
  
  multiplyyy++;

});

