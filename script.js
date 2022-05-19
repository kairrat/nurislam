const body = document.body;
  const nav = document.querySelector('nav')
navLink = document.querySelectorAll('.navlink');
const hamburger = document.querySelector('hamburger');
hamburger.addEventListener('click', toggleClass);
   
function toggleClass() {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('toggleClass');
    body.classList.toggle('noscroll');

}


toggleClass();