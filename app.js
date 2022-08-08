/*sticky nav*/
window.addEventListener('scroll', function(){
    var header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
})



/*toggle button*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const topBar = document.getElementsByClassName('bar-toggle')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    topBar.classList.toggle('active')
})









/*slide*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 2,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});