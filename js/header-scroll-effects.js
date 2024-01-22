let html = document.getElementsByTagName('html')[0];
let header = document.getElementsByTagName('header')[0];
let logo = document.getElementsByClassName('logo')[0];
let nav = document.querySelectorAll('header nav')[0];
let hamburger = document.getElementsByClassName('hamburger')[0];
let navItems = document.querySelectorAll('header nav a');
let dropdownTriggers = document.querySelectorAll('li:has(ul)');
let dropdownMenu = document.querySelectorAll('header nav ul ul');
let dropdownArrows = document.querySelectorAll('li::after');

// Change header colours on scroll
window.addEventListener('scroll', function headerScrollEffects() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.classList.add('white-bg','header-shadow');
    logo.classList.remove('white-logo');
    hamburger.classList.add('hamburger-dark');

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.add('dark-nav-text');
    }

    for (let i=0; i < dropdownMenu.length; i++) {
      dropdownMenu[i].classList.add('white-bg','dropdown-shadow');
    }

  } else {
    header.classList.remove('white-bg','header-shadow');
    logo.classList.add('white-logo');
    hamburger.classList.remove('hamburger-dark');

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('dark-nav-text');
    }

    for (let i=0; i < dropdownMenu.length; i++) {
      dropdownMenu[i].classList.remove('white-bg','dropdown-shadow');
    }
  }
}) 
 
// Show/hide mobile nav 
hamburger.onclick = function slideMobileNav() {
    html.classList.toggle('disable-scroll');
    nav.classList.toggle('slide-nav');
    hamburger.classList.toggle('hamburger-cross');   
}

for (let i=0; i < navItems.length; i++) {
  navItems[i].onclick = function () {
    html.classList.remove('disable-scroll');
    nav.classList.remove('slide-nav');
    hamburger.classList.remove('hamburger-cross');
  }
}

// Expand/collapse mobile nav accordians
for (let i=0; i < dropdownTriggers.length; i++) {
    dropdownTriggers[i].onclick = function() {
        dropdownMenu[i].classList.toggle('dropdown-accordian');
    }
}

console.log('Site by Chris and Rob @ New World Digital Media');