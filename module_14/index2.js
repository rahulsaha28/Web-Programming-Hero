/**
 * leapyear = year/4 if reminder is zero
 */

 function findLeapYear(year){
     if(year%4 == 0 && year%100!=100){
         console.log(year+" is a leapyear.");
     }
     else{
         console.log(year+" is not a leapyear.");
     }
 }

 findLeapYear(2024);