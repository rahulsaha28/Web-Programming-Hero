let unda = document.querySelector(".unda");

for(let i=0; i<10; i++){
    let element = document.createElement('p');
    element.innerText = "hi "+(i+1);
    unda.appendChild(element);
}