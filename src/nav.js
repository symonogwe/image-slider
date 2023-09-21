import logoSrc from "./Assets/logo.svg";

// logo img
const logoImg = document.querySelector(".logo");
logoImg.src = logoSrc;

// hamburger menu functionality
function toggleMenu() {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  hamburgerBtn.classList.toggle("active-menu");

  const navContainer = document.querySelector(".nav-container");
  navContainer.classList.toggle("active-nav-container");
}

const hamburgerBtn = document.querySelector(".hamburger-btn");
hamburgerBtn.addEventListener("click", toggleMenu);
