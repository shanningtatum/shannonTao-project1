const openSideNav = document.querySelector("#menuButton");
const slideOutNav = document.querySelector(".slideOutNav");
const closeMenu = document.querySelector("#closeMenu");
const nextImage = document.querySelector("#nextImage");
const prevImage = document.querySelector("#prevImage");
const headerNavBar = document.querySelector(".headerNavBar");
const headerWrapper = document.querySelector(".homeHeader .wrapper");
const scrollToTop = document.querySelector(".scrollToTop");

document.addEventListener("scroll", function (e) {
  console.log(e);

  if (scrollY > 10) {
    headerNavBar.classList.add("active");
    headerWrapper.classList.add("active");
    scrollToTop.style.display = "block";
  } else {
    headerNavBar.classList.remove("active");
    headerWrapper.classList.remove("active");
    scrollToTop.style.display = "none";
  }
});

scrollToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
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

console.log(headerWrapper);

// carousel if possible
// sticky nav bar
