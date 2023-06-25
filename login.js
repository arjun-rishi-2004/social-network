let form = document.getElementById("form");
let usernameInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

form.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();
  let username = usernameInput.value;
  let password = passwordInput.value;
  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    console.log("User not found. Please register first.");
    return;
  }

  if (username === user.email && password === user.password) {
    // Redirect to the post page with the same user details
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "posts.html";
  } else {
    console.log("Invalid username or password.");
  }
}
