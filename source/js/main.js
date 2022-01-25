let navMain = document.querySelector('.header__navigation');
let navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('main-navigation--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-navigation--closed')) {
    navToggle.classList.remove('toggle--closed');
    navMain.classList.remove('main-navigation--closed');
  } else {
    navToggle.classList.add('toggle--closed');
    navMain.classList.add('main-navigation--closed');
  }
});
