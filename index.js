document.addEventListener('DOMContentLoaded', () =>{
  const form = document.querySelector("#fertilizer-form");
  form.addEventListener('submit', (e) => {
      e.preventDefault()
      let search = e.target.search.value
      //console.log(search)
      handleSearch(search)
        
function handleSearch() })

  fetch('http://localhost:3000/fertilizer' + search, {
      method: 'GET',
      header:{
          'Content-Type': 'application/json',
           
      },
      body: JSON.stringify()
  })
  .then(res => res.json())
  .then(data => {console.log(data)
      document.querySelector('#fertilizer-list').innerHTML = ''
      

      data.items.forEach(user => {
          console.log(user)
          let userCard = document.createElement('li')
          userCard.className = 'all-fertilizers'
          userCard.innerHTML = `
              <div class='content'>
                  <h3> fertilizer: ${fertilizer.login}</h3>
                  <p> URL: ${fertilizer.html_url}</p>
                  
                  <img src=${fertilizer.poster_url} />
              </div>`

         document.querySelector('#fertilizer-list').appendChild(userCard) 
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

// Get the popup wrapper and iconClose
const popupWrapper = document.querySelector('.wrapper');
const iconClose = document.querySelector('.icon-close');

// Add event listener to the registration button
registrationButton.addEventListener('click',  () => {
  // Show the registration popup
  popupWrapper. classList.add ('active-popup');
});

// Add event listener to the icon Close
iconClose.addEventListener('click',  () =>  {
  // Hide the registration popup
  popupWrapper. classList.remove ('active-popup')
});
<li><a class="active" href="#">Home</a></li>







  })
  })      
})

