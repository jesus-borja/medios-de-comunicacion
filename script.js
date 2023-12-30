const toggle = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar-links");
const navbarLinks = document.querySelectorAll(".navbar-link");

const hideLinks = () => {
  navbar.classList.toggle("active");
};

toggle.addEventListener("click", hideLinks);

navbarLinks.forEach((link) => {
  link.addEventListener("click", hideLinks);
});
