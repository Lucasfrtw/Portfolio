const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

const navLink = document.querySelectorAll(".nav-links li a");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.querySelector(".nav-links");
    navMenu.classList.remove("nav-active");
    hamburger.classList.remove("toggle");
  });
});
