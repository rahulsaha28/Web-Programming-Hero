const Worker = {
    name:"rahul",
    age:25,
    getName:function(){
        console.log(this);
        // return this.name;
    }
}

const student = {
    name:"P",
    age:23
}

const c = Worker.getName.bind(student);

