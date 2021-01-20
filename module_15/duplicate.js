

var listName = ["rahul", 'suzon', "nakib", "suvo", "tup", "suzon"];

function uniqueFinder(name){
    let list = [];
    for(let i=0; i<listName.length; i++){
        if(list.indexOf(name[i])==-1){
            list.push(name[i]);
        }
    }
    return list;
}

console.log(uniqueFinder(listName));