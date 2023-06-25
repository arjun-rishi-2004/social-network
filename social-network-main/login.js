let form = document.getElementById("form");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
console.log(emailInput.value)
let user = JSON.parse(localStorage.getItem("userDetails"));

console.log(user)
form.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();
  let username = emailInput.value;
  let password = passwordInput.value;
  let user = JSON.parse(localStorage.getItem("userDetails"));

  if (!user) {
    alert("User not found. Please register first.");
    return;
  }

  if (username === user.email && password === user.password) {
    // Redirect to the post page with the same user details
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "posts.html";
  } else {
   alert("Invalid username or password.");
  }
}


