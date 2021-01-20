/**
 *                 if n==0 return 1
 * 
 *               /
 *  fraction(n) = 
 *               \
 *                else n>0
 * 
 * 
 */

 function factorial(n){
     if(n==0){
        return 1;
     }
     else{
        return factorial(n-1)*n;
     }
 }

 console.log(factorial(5));