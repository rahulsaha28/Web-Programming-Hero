/**
 * 
 *  if n/[2,3,4,5....n-1]
 * 
 * 
 */

 function findPrime(n){
     let isPrime = true;
     for(let i=2; i<n; i++){
         if(n%i== 0){
             isPrime = false;
             break;
         }
     }
     return isPrime;
 }

 console.log(findPrime(57));