
let speach = "i am ok are you ok now.";

function reverseWord(word){
    let letter = '';
    for(let i=word.length-1; i>=0; i--){
        letter += word[i];
    }
    return letter;
}

console.log(reverseWord(speach));