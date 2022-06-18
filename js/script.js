///// burger/////////////
const button = document.querySelector('.burger__button');
const menu = document.querySelector('.header__menu-list');

button.addEventListener('click', () => {

   button.classList.toggle('active');
   menu.classList.toggle('active');
})