// let nums=[24,78,98.09]

// let narr=nums.map((val)=> {
//     return  val*val;
// });
// console.log(narr);

// // map is use to create a new array based on the the some return value orginal is same 
// // and forEach use when we want to perform some operation on the data and want to print the value 



// // filter array ==> it is use to filter the array 
// let num_arr=[12,13,14,15,16,17,18];
// let num=num_arr.filter((val)=>{
//     return val%2==0;
// });

// console.log(num);

//  // reduce is use to perform some operation on the data and return the single value so for this we use reduce method of array

// let array=[1,2,3,4,5,0,9,43];

// let newq=array.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(newq);


// // print larger of array

// let large =array.reduce((res,curr)=>{
//     return (res>curr) ? res:curr ;
// });
// console.log(large);


// // program to taking input by user and filter the array who  get 90+ marks

// let n=prompt("Enter the value: ");

// let arr7=[n];
// for(let i=0;i<n;i++){
//     arr7[i]=prompt();
// }

// let filtarr=arr7.filter((val)=>{
//     return val>=90;
// });

// console.log(filtarr);
// for(let x of filtarr){
//     console.log(x);
// }

// const arr=[10,34,54,'rohit',22]

// arr.forEach((number,index,arr) => {
//     console.log(number,index,arr);
// });


// const arr=[12,23,4,56,87,1]

//  let sum=0
// arr.forEach(number =>{
//     sum+=number;
// });

// console.log("sum is : ",sum);
// console.log(`Sum is ${sum}`);

// filter is used to filter the value according to consdition 

// const arr1=[10,20,32,1,9,8,78];

// const new_arr=arr1.filter((number)=> number<=20);

// console.log(new_arr);

// new_arr.forEach(number=>{
//     console.log(number);
// });

const products=[
    // electronics

    { id: 1, name: "Laptop", category:"Electronics",price: 1200,isStock:true},
    {id:2,name:"Headphone",Category:"Elcetrincs",price:200,isStock:true},
    {id:3,name:"SmartPhone",category:"Electronics",price:300,isStock:false},

    // Books
    {id:4,name:"The Habbit",category:"Books",price:25,isStock:true},
    {id:5,name:"A Brief History of Time",category:"Books",price:40,isStock:false}
]


// const prrod=products.map((product)=> ({name:product.name,price:product.price}))
// console.log(prrod);

// reduce method 

// accumulator=sum,
// acumulator =1200 +200

// it will return sum of all product 
// total_price=products.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue.price;
// },0);

// console.log(total_price);


// if we want to do sum only that product that is in stock 

// const isStock_sum=products.reduce((acc,prev)=>{
//     if(prev.isStock){
//         return acc+prev.price;
//     }
//     else{
//         return acc;
//     }
// },0);

// console.log(isStock_sum);


// set => it is use to contain only unique value inside the method

const arr=[10,20,30,40,10,20,30,10,40,20,10]
console.log(arr);
arr.push(20);
console.log(arr);

const s1=new Set(arr)
console.log(s1); // s1 contains only unique value inside it 
s1.add(30);
console.log(s1);
console.log(s1.has(20)); //  used to check given element is exist in set or not 

// .clear method is used to delete all value from the set
// .delete is also used to delete element but it take one value inside method

// real world use of set=>  when we want to remove duplicate from the arr or a long data


// converting set into arr
const new_arr=[...s1];
console.log(new_arr);
console.log(typeof new_arr); // used to print the type 


// iteratig one by one on a array 
// for (let s2 of new_arr){
//     console.log(s2);
// }


// more operations with map function

const m1=new Map([
    ["rohit",40],
    [2,"rohit"],
    [true,11],
    [[10,30,11],"Mohit"]
]);

m1.set({name:"manish",age:20},false); // now it will also add in m1

console.log(m1);

// .get is used to find any elemnt in the object

console.log(m1.get("rohit"));

// return size of the object 
console.log(m1.size);

//  we also itterate with help of for of loop on the set 

console.log("Itterating one by one on the set using key and value : ")
for(let [key,value] of m1){
    console.log(key,value);
}