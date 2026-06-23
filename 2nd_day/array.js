//  in this file we are going to learn array in js

let arr=["Hello","Class","What","is","The","Problem"];
console.log(arr);
// finding array length
console.log(arr.length);
for(let idx=0;idx<arr.length;idx++){
    console.log(arr[idx]);
}
// for accessing the array element we generally use for of loop 

for(let hero of arr){
    console.log(hero.toUpperCase());
}
let sum=0;

let arr1=[23,123,111,322,8];
for(let i of arr1){
    sum+=i;
}
console.log(sum)

//  change arrat to stroe final price at given price give 10% off
let arr3=[250,645,300,900,50];
for(let i=0;i<arr3.length;i++){
    arr3[i]=arr3[i]*0.9;
    console.log(`After offer =${arr3[i]}`);
}

// methods of array 
// 1- push(): add to end
// 2. pop(): delete from end & return 
// 3. toString(): converts array to string 
let new_arr=[12,34];
// console.log(new_arr.push(34));
// console.log(new_arr[2]);

new_arr.push(50);
new_arr.push(40);
console.log(new_arr);

// console.log(new_arr.pop())

// console.log(new_arr.splice(0,2)); // it will cut from arr that part 
// console.log(new_arr); // only two one element 50 will left in arr



// console.log(new_arr.slice(1,4)) // only return not trim/cut element from array

// accessing elemene one by one 

for(let value of new_arr){
    console.log(value);
}