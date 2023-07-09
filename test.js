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
    })
    })      
})