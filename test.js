
document.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector("#fertilizer-form");
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let search = e.target.search.value
        //console.log(search)
        handleSearch(search)
    
function handleSearch() {
    
    fetch('https://github.com/Hellenwamaitha/jsonapi/blob/main/fertilizer.json' + search, {
        method: 'GET',
        header:{
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => {console.log(data)
        document.querySelector('#fertilizer-list').innerHTML = ''
       
  
        data.items.forEach(fertilizer => {
            console.log(fertilizer)
             fertilizerdetails = document.createElement('li')
            fertilizerdetails.className = 'all-fertilizers'
            fertilizerdetails.innerHTML = `
                <div class='content'>
                    <h3> Name: ${fertilizer.name}</h3>
                    <p> componet: ${fertilizer.componet}</p>
                    <button class='select-button' style='margin-bottom: 25px'>
                    </button>
                    </div>
                    <img src=${fertilizer.poster_url} />
                </div>`
            
           document.querySelector('#fertilizer-list').appendChild(fertilizerdetails)   
		
		}) 
		})
	}
})
}) 
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


 