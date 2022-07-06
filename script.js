const openSideNav = document.querySelector("#menuButton");
const slideOutNav = document.querySelector(".slideOutNav");
const closeMenu = document.querySelector("#closeMenu");
const nextImage = document.querySelector("#nextImage");
const prevImage = document.querySelector("#prevImage");
const headerNavBar = document.querySelector(".headerNavBar");

document.addEventListener("scroll", function () {
  headerNavBar.classList.add("active");
});

openSideNav.addEventListener("click", function () {
  slideOutNav.classList.add("active");
});

closeMenu.addEventListener("click", function () {
  slideOutNav.classList.remove("active");
});

nextImage.addEventListener("click", function () {
  console.log("next image pressed");
});

prevImage.addEventListener("click", function () {
  console.log("prev image pressed");
});

// carousel if possible
// sticky nav bar
