/**
 * 
 * 
 */

function fib(n){
    let arr = [1,1];
    let first = arr[0];
    let second= arr[1];
    for(let i=3; i<=n; i++){
        arr.push(first+second);
        first = second;
        second= arr[arr.length-1];
    }
    return arr;
} 

console.log(fib(10));