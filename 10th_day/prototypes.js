// prototypes and classes

// const obj={
//     name:"Rohit",
//     age:39,
//     greet: function(){
//         console.log("Hello ji ");
//     }
// };

// obj.greet();//
// console.log(obj.hasOwnProperty("names")); // it will return false

//console.log(obj.toString());

// const arr=[10,20,30];
// // const arr1=[90,34,23];
// // console.log(arr.concat(arr1));
// // arr.push(arr1);
// // console.log(arr);
// const obj2={
//     account:340
// }

// console.log(obj2.account);

// obj2.__proto__=obj;// this is used to make the prototype of obj into obj2

// console.log(obj2.name);


// const obj={
//     name:"Rohit",
//     age:39,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// };

// const obj={
//     name:"Ravi",
//     age:39,
//     greet: function(){
//         console.log(`hello ${this.name}`);
//     }
// };

// so if we need multiple object so we have to creat by own for make solution this we do prototyping and also by class


class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHi(){
        console.log(`hi ${this.name}`);
    }
}
const p1=new person("Karan",20);
console.log(p1.name ," ",p1.age);
p1.sayHi();


const p2=new person("gaurav",20);
console.log(p2.name,p2.sayHi(),p2.age);

// this concept is called inheritance 

class bank extends person{
    constructor(name,age,account,balalnce){
        // super is used for give the value to parent class constructor
        super(name,age);
        this.account=account;
        this.balalnce=balalnce;
    }
    checkBalance(){
        return this.balalnce;
    }
}

const cust1=new bank("sachin",52,540,12000);
console.log(cust1);
cust1.sayHi();
console.log(cust1.checkBalance());


// with help of object.create() methid 

const objj={
    name:"Saurabh",
    age:28,
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}

const obj23=Object.create(objj);
console.log(obj23.name);
obj23.greet();