function f(){
    console.log(arguments);
}

const p = ()=>{
    console.log(arguments);
}

f(1,2,3,4,5);
p("fuck", "puck");
