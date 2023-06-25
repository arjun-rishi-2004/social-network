document.getElementById('form-box').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  var username=firstName+" "+lastName;
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        // Create user object with the registration details
        var userDetails = {
        username:username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        };
  
        // Store user object in local storage or perform any desired action
        localStorage.setItem('user', JSON.stringify(userDetails));
  
        // Redirect to the profile page with the filled-in details
        window.location.href = 'profile.html';
      } else {
        alert('Password and Confirm Password do not match.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  });
  