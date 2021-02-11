fetch('https://jsonplaceholder.typicode.com/user')
  .then(response => response.json())
  .then(json => userData(json))



function userData(users){
    for(let i=0; i<users.length; i++){
        let li = document.createElement("li");
        li.innerText = `USER NAME :::::----------------- ${users[i].name}`;
       document.getElementById("users-container").innerHTML += li;
     
    }
   
}