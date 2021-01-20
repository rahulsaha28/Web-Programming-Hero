

function maxArr(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxArr([3,2,4,8,5]));