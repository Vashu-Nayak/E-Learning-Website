let burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const navlist = document.querySelector('.nav-list')
const rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=> {
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})