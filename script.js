const openSideNav = document.querySelector("#menuButton");
const slideOutNav = document.querySelector(".slideOutNav");
const closeMenu = document.querySelector("#closeMenu");
// const nextImage = document.querySelector("#nextImage");
// const prevImage = document.querySelector("#prevImage");
const headerNavBar = document.querySelector(".wrapper nav");
const headerWrapper = document.querySelector("header .wrapper");
const scrollToTop = document.querySelector(".scrollToTop");

const commentPost = document.querySelector(".commentPosts ul");

document.addEventListener("scroll", function () {
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

const formEl = document.querySelector("form");

const setupEventListener = () => {
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    // create Date
    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ];
    // store the data the user is posting the comment
    const postDate = `${months[month]}  ${day}  ${year}`;

    // store user name
    const userNameInput = document.querySelector("#name");
    const userName = userNameInput.value;

    // store user comment
    const userCommentInput = document.querySelector("#userComment");
    const userComment = userCommentInput.value;

    if (userName && userComment) {
      // create li element for our UL
      const listEl = document.createElement("li");
      const userPost = document.createElement("div");
      userPost.classList.add("commentText");

      // creates div class with default pfp
      listEl.innerHTML = `<div class="commentPicture"><img src="./assets/blog-8.png" alt="Default User Profile Picture"/>`;

      // create div element
      const divEl = document.createElement("div");
      divEl.classList.add("commentText");

      // create h3 class with user name value
      const h3El = document.createElement("h3");

      h3El.textContent = userName;
      const postName = h3El.textContent;

      // how to Include REPLY type?
      h3El.innerHTML = `${postName} - <span class="responseType">Reply</span>`;

      // create paragraph element
      const paragraphEl = document.createElement("p");

      paragraphEl.textContent = userComment;

      // create second paragraph element
      const dateParagraphEl = document.createElement("p");
      dateParagraphEl.classList.add("postDate");

      dateParagraphEl.textContent = postDate;

      // append h3 and p to div
      divEl.append(h3El);
      divEl.append(paragraphEl);
      divEl.append(dateParagraphEl);

      // clear the userName and userComment input fields
      userNameInput.value = "";
      userCommentInput.value = "";

      // <div class="commentPicture"><img src="./assets/blog-8.jpeg" alt="Default User Profile Picture"/></div>

      commentPost.append(listEl);
      listEl.append(divEl);
    } else {
      alert("please enter name and message!");
    }
  });
};

setupEventListener();
// PSEUDO CODE FOR COMMENT SECTION
// create event Listener for submit button
// create li element when submitted, create a div with comment picture (inner HTML)
// create another div with .commentText class
// store variables for username, usermessage, and date user is posting
// create h3 element for username, create paragraph for usermessage and paragraph for date user is posting
// append the above three elements to the .commentText class
