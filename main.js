let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// Load posts from local storage when the page loads
window.addEventListener("load", () => {
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

let loadPosts = () => {
  // Retrieve posts from local storage and update the posts section
  if (localStorage.getItem("posts")) {
    posts.innerHTML = localStorage.getItem("posts");
  }
};
