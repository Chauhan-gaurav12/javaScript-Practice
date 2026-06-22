for(let i=0;i<5;i++){
    console.log("My name is Gauav Kumar");
}
// print sum 1 to n
let sum=0;
for(let i=0;i<=6;i++){
    sum+=i;
}
console.log("Sum=",sum);
console.log("where are you from ");
// accesing in objects 
let student={
    name:"Gaurav Kumar",
    class:"Mca",
    cgpa:10,
    isPass:true
};
// for accesing the key and value in a object we simply use for in loop 
for(let key in student){
    console.log(key ,"= ",student[key]);
}
console.log("object has printed");

// Taking inout by the user 

let guess=prompt("Enter the number");
console.log(guess);