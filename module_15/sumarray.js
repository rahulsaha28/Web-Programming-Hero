

function sumArr(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

console.log(sumArr([2,4,6,8,90]));