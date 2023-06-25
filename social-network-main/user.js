viewProfileButton.addEventListener("click", () => {
    // Retrieve user details from local storage
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    
    if (userDetails) {
      // Construct the URL with user details as query parameters
      let url = `user.html?username=${userDetails.username}&email=${userDetails.email}`;
      
      // Redirect to the profile page with user details
      window.location.href = url;
    }
  });
  