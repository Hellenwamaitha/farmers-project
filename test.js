// JavaScript code for handling navigation

// Get the navigation links
const navLinks = document.querySelectorAll('.navbar ul li a');

// Add event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    // Prevent default link behavior
    event.preventDefault();

    // Remove the "active" class from all navigation links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the "active" class to the clicked navigation link
    this.classList.add('active');

    // Get the target page from the link's href attribute
    const targetPage = this.getAttribute('href');

    // Use JavaScript to navigate to the target page
    window.location.href = targetPage;
  });
});


// JavaScript code for displaying a registration popup

// Get the registration button
const registrationButton = document.querySelector('.btnregistration-popup');

// Get the popup wrapper and close button
const popupWrapper = document.querySelector('.wrapper');
const closeButton = document.querySelector('.icon-close');

// Add event listener to the registration button
registrationButton.addEventListener('click', function () {
  // Show the registration popup
  popupWrapper.style.display = 'block';
});

// Add event listener to the close button
closeButton.addEventListener('click', function () {
  // Hide the registration popup
  popupWrapper.style.display = 'none';
});
<li><a class="active" href="#">Home</a></li>