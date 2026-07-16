// function sum_num ( a, b){
//     console.log(` sum is : ${a+b}`);
// }
// sum_num(10,17);
// let a =35,b=87;
// sum_num(a,b);

// // code of multiplication by using arrow function
// const val =(a,b)=>{
//     return a*b;
// }
// console.log(val(13,6));


// //  program to take input string using fuction and return number of vowel in this 

// function count_vowel(str){
//     let count=0;
//     for (let char of str){
//         if(char=='a'|| char=='i'|| char=='e'|| char=='o'|| char=='u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(`Number of vowel is ${count_vowel("My name is gaurav Kumar ")}`)

// // use of forEach loop in the js 

// let arr=[14,25,36,96,54,78];
// arr.forEach(function printVal (val) {
//     console.log(val);
// });
 
// console.log("\n")
// arr.forEach((val)=>{
//     console.log(val);
// })

// // we can print idx and array elemnt also by using forEach loop 

// arr.forEach(function printVal (val, idx,arr) {
//     console.log(val, idx,arr);
// });

// // print the quare of each array element using for loop 

// let new_arr=[10,20,30,40,50];
// new_arr.forEach((val,idx)=>{
//    let k=val*val;
//     new_arr[idx]=k;
//      console.log(k);
// });
// console.log("THe array after change in square",new_arr)



// function calck(num){
//     console.log("Square is ",num*num);
// }
// new_arr.forEach(calck);



// function flexiale for multiple input 


// rest operator is used for this work but it is different from spread operator
// function add_num(...num){ // now we can send multiple input at run time 
//     // console.log(num); // it will create a array of number 
//     sum=0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }

// add_num(12,12,2,23,4);
// add_num(3,4,56,3,1);


// another example of rest operator
// const arr=[10,20,30,40,50]

// // const [first ,second ,...num]=arr; // in this num variable contain rest all array 
// // console.log(first,second,num);

// // now example of spread operaor 

// const arr2=[25,85,74,89,63];
// const ans=[...arr2,arr2]; // it is use to combine two object or two array details 
// console.log(ans); //both array will combine with help of spread operator




// creating function with help of expression

// console.log(add_num(10,20)); //it will throw error
const add_num=function(num1,num2){
    return num1+num2;
}

console.log(add_num(10,20));


// difference in both 

// when we create expression function so it can we call once it created not before   but simple function can we call before creation and definition of that function after the calling statement it will be run easily



// arrow function 

// const new_num=()=>{

//     console.log("hi i am a boy");
// }
// new_num();

//No return keyword is needed in this no curly braces is need when only one expression is given 

// const sum_num=(num1,num2)=> num1+num2; // it is also valid statement 

// console.log(sum_num(47,87));


// exaample of arrow function is 

// const arr=[1,9,2,8,1,6,9,4]
// arr.sort((a,b) =>a-b);

// console.log(arr);

// const greet=()=> ({name :"rohit",age:15});

// console.log(greet())


// if we want to create function that run automatically when it will come 

// immediate call function

// (function greet(){
//     console.log("hello");
// })();   // this will call automatically 


// function callback 
        // > it is way to define function as a paramater 

function greet(){
    console.log("Hello how are you");
}

function meet(callback){
    console.log("currently i am in meeting");
    callback();
    console.log("i am fine");
}

meet(greet); // in this first meet run and then greet run 

//meet(greet()); // in this first greet execute and then meet execute

function zeptoOrder(){
    console.log("we have started preparing your food");
}

function blinkit(){
    console.log("Blinkit started packing ");
}
function payment(amount,callback){
    console.log(`${amount} payment has initialized`);
    console.log("payment is received ");
    callback();
}

//payment(500,blinkit);
payment(300,zeptoOrder);