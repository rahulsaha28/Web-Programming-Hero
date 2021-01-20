/**
 *     a > b   
 *    |    |    
 *   a>c   c<b
 * 
 * 
 * 
 */


function maxValue(a,b,c){
    if(a>b){
        if(a>c){
            return a;
        }
        else{
            return c;
        }
    }
    else if(b>a){
        if(b>c){
            return b;
        }
        else{
            return c;
        }
    }
}