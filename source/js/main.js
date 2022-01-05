let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');

navToggle.classList.remove('main-navigation__toggle_nojs');
navMain.classList.remove('main-navigation_nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-navigation_closed')) {
    navToggle.classList.add('main-navigation__toggle_close');
    navMain.classList.remove('main-navigation_closed');
  } else {
    navToggle.classList.remove('main-navigation__toggle_close');
    navMain.classList.add('main-navigation_closed');
  }
});
