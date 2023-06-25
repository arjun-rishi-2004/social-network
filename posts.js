let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let username = document.getElementById("username");
let education = document.getElementById("education");
let viewProfileButton = document.getElementById("view-profile-button");
let logoutButton = document.getElementById("logout-button");

// Load user details and posts from local storage when the page loads
window.addEventListener("load", () => {
  loadUserDetails();
  loadPosts();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
  savePosts(); // Save posts to local storage
};

let createPost = () => {
  posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
  savePosts(); // Save updated posts to local storage
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  savePosts(); // Save updated posts to local storage
};

let savePosts = () => {
  // Convert posts HTML to string and save it in local storage
  localStorage.setItem("posts", posts.innerHTML);
};

let loadUserDetails = () => {
  // Retrieve user details from local storage
  let userDetails = JSON.parse(localStorage.getItem("userDetails"));
  if (userDetails) {
    username.textContent = userDetails.username;
    education.textContent = userDetails.education;
  }
};

let loadPosts = () => {
  // Retrieve posts from local storage and update the posts section
  if (localStorage.getItem("posts")) {
    posts.innerHTML = localStorage.getItem("posts");
  }
};

viewProfileButton.addEventListener("click", () => {
  // Redirect to the profile page
  window.location.href = "user.html";
});

logoutButton.addEventListener("click", () => {
  // Clear local storage and redirect to the login page
  localStorage.clear();
  window.location.href = "login.html";
});
