// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the necessary elements
  const registrationButton = document.querySelector(".btnregistration-popup");
  const closeButton = document.querySelector(".icon-close");
  const formWrapper = document.querySelector(".wrapper");
  const form = document.querySelector(".form-box");
  const usernameInput = document.querySelector("input[type='username']");
  const regionInput = document.querySelector("input[type='region']");
  const farmAcresInput = document.querySelector("input[type='Farm Acres']");

  // Add event listener to the registration button
  registrationButton.addEventListener("click", function() {
    formWrapper.style.display = "block"; // Show the form wrapper
  });

  // Add event listener to the close button
  closeButton.addEventListener("click", function() {
    formWrapper.style.display = "none"; // Hide the form wrapper
  });

  // Add event listener to the form submit button
  formsubmit.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Add event listener to the about button
    aboutButton.addEventListener("click", function () {
      
    })


    // Get the input values
    const username = usernameInput.value;
    const region = regionInput.value;
    const farmAcres = farmAcresInput.value;

    // Perform validation or further processing if needed

    // Display the input values
    console.log("Username:", username);
    console.log("Region:", region);
    console.log("Farm Acres:", farmAcres);

    // Reset the form
    form.reset();
  });
});
