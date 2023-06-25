document.addEventListener('DOMContentLoaded', function() {
  var userDetails = {
    // Initialize user details object
    profilePicture: 'placeholder',
    location: '',
    education: '',
    dob: '',
    about: '',
    interests: ''
  };

  // Update the profile page with user details
  var user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    document.getElementById('name').value = user.firstName + ' ' + user.lastName;
    document.getElementById('email').value = user.email;
  }

  document.getElementById('location').value = userDetails.location;
  document.getElementById('education').value = userDetails.education;
  document.getElementById('dob').value = userDetails.dob;
  document.getElementById('about').value = userDetails.about;
  document.getElementById('interests').value = userDetails.interests;
  document.getElementById('profile-picture').src = userDetails.profilePicture;

  // Handle profile picture upload
  document.getElementById('profile-picture-upload').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      // Update profile picture preview
      document.getElementById('profile-picture').src = e.target.result;

      // Save profile picture URL to user details
      userDetails.profilePicture = e.target.result;
      console.log('Profile Picture:', userDetails.profilePicture);
    };

    // Read the uploaded file as a data URL
    reader.readAsDataURL(file);
  });

  // Handle "Save" button click event
  document.getElementById('save-button').addEventListener('click', function(event) {
    event.preventDefault();
    userDetails.username = document.getElementById('name').value;
    userDetails.email = document.getElementById('email').value;
    // Update user details with additional information

    userDetails.location = document.getElementById('location').value;
    userDetails.education = document.getElementById('education').value;
    userDetails.dob = document.getElementById('dob').value;
    userDetails.about = document.getElementById('about').value;
    userDetails.interests = document.getElementById('interests').value;

    // Save updated user details to local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Redirect to the posts page after saving
    window.location.href = 'posts.html';
  });
});
