/**
 * 
 *  n! = n*(n-1)*(n-2)*....3*2*1
 * 
 */

 function factorial(n){
     let result = 1;
     for(let i=n; i>0; i--){
        result = result * i;
     }
     return result;
 }

 console.log(factorial(0));