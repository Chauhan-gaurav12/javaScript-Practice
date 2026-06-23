//  learning string
let str="Gaurav where are u can u come in the college"
console.log("String length is =",str.length);
// printing single character
console.log(str[43]);
let obj={
    name:"Gaurav",
    class:7
};

console.log(`my name is ${obj.name} and my class is ${obj.class} `)

// `` the tidle sign is use for printing the object varible and any varible by giving dolar sign and we do not need to do come and giving varible name and again use comma for writing another string this is called ==== String Interpolation

// string methods 

let str1="Gaurav where are u.";
let str2="I am at home"

console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.trim(5));
console.log(str1.slice(1,8));
console.log(str1.concat(str2));
console.log(str1.replace("G",str2));
console.log(str1.charAt(8));
//  all the string did not change orignal string at that place it will create a new string 
