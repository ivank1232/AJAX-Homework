let btn = document.getElementById("getData");
let display = document.getElementById("display");
display.style.border = "1px solid black";

btn.addEventListener('click',function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        // console.log(response);
        for(let i = 0; i < response.length; i++){
            display.innerHTML += ``;
            // display.innerHTML += `<tr><td>ID: ${response[i].id}</td></tr>`;
            display.innerHTML += `<tr>
            <td>ID:${response[i].id}</td>
            <td>Name: ${response[i].name}</td>
            <td>Username: ${response[i].username}</td>
            <td>Email: ${response[i].email}</td>
            </tr>
            <tr>
            <td>Street: ${response[i].address.street}</td>
            <td>Suite: ${response[i].address.suite}</td>
            <td>City: ${response[i].address.city}</td>
            <td>Zipcode: ${response[i].address.zipcode}</td>
            </tr>
            <tr>
            <td>Geo: </td>
            <td>LAT: ${response[i].address.geo.lat}</td>
            <td>LNG: ${response[i].address.geo.lng}</td>            
            </tr>
            <tr>
            <td>Phone:</td>
            <td>${response[i].phone}</td>  
            <td>Website:${response[i].website}</td>          
            </tr>
            <tr>
            <td>Company:${response[i].company.name}</td>
            <td>Catch Phrase:${response[i].company.catchPhrase}</td>  
            <td>BS:${response[i].company.bs}</td>          
            </tr>
            `;
        }
    })
    .catch(function(err){
        console.log("Error");
    })
    .finally(function(){
        console.log("Done")
    })
})