function buttonClick(e){
    console.log(e);
}
function changeColor(){
    this.style.backgroundColor = "salmon";
    this.style.color = "white";
}

function changePre(){
    this.style.backgroundColor = "white";
    this.style.color = "gray";
}

document.querySelector("#click").addEventListener('mouseenter', buttonClick);
document.querySelector("h2").addEventListener('mouseenter', changeColor);
document.querySelector('h2').addEventListener("mouseleave", changePre);