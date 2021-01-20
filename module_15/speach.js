
let speach = "i am a good boy am i write";

function counter(spc){
    let count = 0;
    for(let i=0; i<speach.length; i++){
        if(speach[i]==" "){
            count++;
        }
    }
    return ++count;
}

console.log(counter(speach));