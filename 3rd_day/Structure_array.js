// let arr=[10,20,30,40,50];
// arr[3]=90;

// const arr2=arr;
// arr.push(70);
// console.log(arr2);
// console.log(arr);
// arr=[10,23,43]
// console.log(arr);

// let arr=[10,2,3,4,900,5,90];

// //arr.sort()
// arr.sort((arr,b) => arr-b)

// console.log(arr);



// user={
//     name: "Gurav Kumar",
//     class: "MCA",
//     age: 30,
//     sal:100000,
//     greet:function(){
//         console.log(`strike is comming ${this.name}`);// user.name this is also valid in this 
//         // but we usually prefer this.key_name 
//     }
// }




// user.name throw error when we pass same it to another structure so another user name will not come so we use this to point out the same structure name ;


// console.log(user);
// user.greeting=function(){
//     // console.log("Strike is comming ");
//     return "strike is comming"; // it is also valid in this 
// }



// console.log(user.greeting());

// for (let num of Object.values(user)){
//     console.log(num);
// }
// let temp=Structure.entries(user);
// for(let [key,value] of temp){
//     console.log(key , value);
// }

// console.log(user.greet());


// nested structure

const new_user={
    name:"Rahul Kumar",
    age:20,
    address:{
        city:"Kotdwar",
        state:"UK"
    }
}

// // accessing the value of user state

// console.log(new_user.address.state);

// Structure take refererences from two another when we pas it another variable but we can remove it by spread operator

const user2={... new_user};


// changing in user 2

user2.class="MCA";

// console.log(new_user);
// // now both are referencing at different 
// console.log(user2);

// # also called shallow copy 
// both output is different because we assign by using spread operator // but it handle for single not nested 



// for handling nested

const user3=structuredClone(new_user);

user3.address.city="Canada";

console.log(user2);
console.log(new_user);


// key value can be string or symbol

const sym=Symbol("id");
const uss = {
    name:"Gaurav",
    0: 10,
    1: 19,
    2: 15,
    [sym]:"hello ji "
}

console.log(uss[0]);
console.log(uss[sym]);