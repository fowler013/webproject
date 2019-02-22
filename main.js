var hambugerButton = document.querySelector('.hamburger__button');
var mobileNav = document.querySelector('.mobile');

function openMobiles() {
    mobileNav.classList.add('open');
}

function closeMobile() {
    mobileNav.classList.remove('open')
}














hambugerButton.addEventListener('click', openMobiles);
mobileNav.addEventListener('click', closeMobile);