document.addEventListener('DOMContentLoaded', () => { 

  // JavaScript code for displaying a registration popup
  
  // Get the registration button
  const registrationButton = document.querySelector('.btnregistration-popup');
  
  // Get the popup wrapper and iconClose
  const popupWrapper = document.querySelector('.wrapper');
  const iconClose = document.querySelector('.btncancel');
  
  // Add event listener to the registration button
  registrationButton.addEventListener('click', ()=> {
    //Hide the registration button
    registrationButton.style.display = 'none'
    // Show the registration popup
    popupWrapper.classList.add('active-popup');
  });
  
  // Add event listener to the icon Close
  iconClose.addEventListener('click', ()=> {
    // Hide the registration popup
    registrationButton.style.display = 'block'
    // show  registration button
    popupWrapper.classList.remove('active-popup');
  });
  
  document.querySelector('.btnsearch').addEventListener('click', function (event) {
    event.preventDefault();
    var searchTerm = document.querySelector('input[name="search"]').value;
    fetch('https://hellenwamaitha.github.io/jsonapi/fertilizer.json')
      .then(response => response.json())
      .then(data => {
        var resultsContainer = document.getElementById('results');
        resultsContainer.style.display = "block";
        var filteredData = data.fertilizer.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        var html = `<table><tr><th>Name</th><th>Component</th><th>Unit</th><th>Poster</th></tr>`;
        filteredData.forEach(item => {
          html += `<tr>
              <td>${item.name}</td>
              <td>${item.componet}</td>
              <td>${item.unit}</td>
              <td><img src="${item.Poster}" alt="${item.name}" width="100"></td>
              </tr>`;
        });
        html += `</table>`;
        resultsContainer.innerHTML = html;
      })
      .catch(error => console.error('Error:', error));
  });
  
  
  })
  