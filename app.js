const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(" .navbar");
const link = document.querySelectorAll(" .link");



hamburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
  hamburger.classList.toggle("open");

});

link.forEach((item) => {
  item.addEventListener("click", () => {
  navbar.classList.toggle("open");
  hamburger.classList.toggle("open");
});
});
