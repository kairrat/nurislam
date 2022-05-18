function toggleClass() {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('toggleClass');
}


const hamburger = document.querySelector('hamburger');
hamburger.addEventListener('click', toggleClass);