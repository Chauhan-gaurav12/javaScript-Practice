// there is no strict method in js

// var a=10;
// b=40;
// console.log(a,b)


// enabling strict mode 

'use strict'

// now we have to defined untll this code will not work 
// var a=10;
// var b=30;
// console.log(a,b);

// function greet(name1,name2){
//     console.log(name1,name2);
// }

// // greet("sumit","sorav");


// console.log(global); // in node js 

//js it is called window
// console.log(Window);


// it will all environment like js,node js 
console.log(globalThis); // this also work in node js terminal and also js console 

// learn about this keyword 

console.log(this);// in terminal it point null object
// in json it point this global

//  =>  this keyword: in global scope : node js (Empty object), in broswer it will point to window


// .call method 

function increment_age(value,name){
    this.age+=value;
    this.name=name,
    console.log(this.age);
    console.log(this.name);
}

const user={
    name:"mohit",
    age:30
}
const user2={
    name:"Shagun",
    age:47
}
//this wll throw error 

// increment_age(user2,4);

// solution 
// increment_age.call(user2,7,"mohit");
//one more solution

// apply()=> it want data in the form of array
// increment_age.apply(user,[10,"swati"]);


//bind method
// const inc=increment_age.bind(user2,27,"varun");

// // bind=>it is use to store value it will not execute immediately  
// inc();



// itn class cosntructor this will point to newly create empty object
// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// const p1=new person("rohit",28);
// console.log(p1);


// arrow function : this does not exist for arrow function
// in arrow function take this  keyword from it lexical environment

const greet=()=>{
    console.log(this);
}
greet();