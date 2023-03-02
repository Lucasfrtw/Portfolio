const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

navLinks.addEventListener('click', () =>{
  navLinks.classList.toggle('nav-active')
})

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});



