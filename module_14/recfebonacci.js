/**
 * 
 *          fib(n)
 *       /         \
 *    fib(n-1)    fib(n-2)
 *  
 * 
 * 
 */

 function fib(n){
     if(n==1||n==0){
         return [1,1];
     }
     else{
         let fibo = fib(n-1);
         fibo.push(fibo[n-1]+fibo[n-2]);
         return fibo;
     }
 }

//  let arr = [];

//  for(i=1; i<=12; i++){
//      arr[i-1]=fib(i);
//  }



 console.log(fib(12));