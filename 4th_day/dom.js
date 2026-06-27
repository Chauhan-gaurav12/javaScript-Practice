const text=document.getElementById("first");

console.log(text.textContent);

//  now if we want to do some change on ui like changing h1 text 

// text.textContent=("Hello how can i help you ");
// text.innerText="who are youu"; // used to change text on screen
// window.open();// used for open new page 

 // console.log(document) // this is used to see all about the page 
//  alert("welcome on page");// here you can see we did not use window.alert() because we know that window is global object that come automatically

// difference between innerText innerHtml,textcontent

console.log(text.textContent); // it will show all text also display none ignore only tag
console.log(text.innerHTML);// it represent all text inside 
console.log(text.innerText); //it will show only text inside tag


// select on base of tag name
const list=document.getElementsByTagName("li");// it will give back a array but we can not apply all property of array there 

// now we will convert it into proper array 
const arr= [...list]; // by help of spread operator
arr.forEach((val)=>
    {
    console.log(val.textContent)
});

// we also select by class name

// const cla=document.getElementsByClassName()==> it will also return data in aray form 

const qur=document.querySelector("h1");
console.log(qur);