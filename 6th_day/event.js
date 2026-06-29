function handleclick(){
    const element=document.getElementById("first");
    element.textContent="Hi this is Gaurav from this side";
}



// const element=document.getElementById("first");

// element.onclick=function handleclick(){
    
//     element.textContent="Hi this is Gaurav from this side";
// }


// //but all  both method is not corrct because it will overwrite easily 

// // better way 
// // const ele=document.getElementById("first");

// const orignal_text=element.textContent;
// element.addEventListener('click', ()=>{
//     element.style.backgroundColor="pink"
// })

// // let a={
// //     greet : function(value){
// //         console.log("Hello",value);
// //     }
// // }

// // a.greet(10);
// // a.greet(30);

// // mouse event=> click ,drag,hover
// // After that event listne the event=> and then perform operation

// element.addEventListener("mouseenter",()=>{
//     element.textContent="Mouse is not up ";
// });

// // when we leave mouse from the text text will same again 
// element.addEventListener("mouseleave",()=>{
//     element.textContent=orignal_text;
// });

// const child11=document.getElementById("child1");

// child11.addEventListener('click',()=>{
//     child11.textContent="I am clicked";
//     child11.style.backgroundColor="yellow";

//     // child11.style.cssText="background-color:brown;color:red;font-size:30px    font-weight:bold; text-content:center";
// });

// const parent=document.getElementById("parent");

// // applying same option to all child or taking all child accees;
// console.log(parent.children);


// // but it is alsso not a good approach 
// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//         console.log("i am clicked");
//     child.style.backgroundColor="white";
//     });
// }



// now accessing

// this is called event bubling when we click child automatically parent and garand parent call
const grand=document.getElementById("grand-parent");

grand.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target);
    console.log("Grand Parent is clicked");
});

// const parent=document.getElementById('parent');

// parent.addEventListener('click',()=>{
//     console.log("parent is clcked ");
// });

// const child=document.getElementById('child');

// child.addEventListener("click",(e)=>{
//     stoping bubling
//     console.log(e);

//     e.stopPropagation();
//     console.log(e.target)
//     console.log("child is clicked");
// });
// capture phase => Target Phase => bubling phase 

// in this child is target phase and parent and grandparent is bubling phase 

// that's why when we are clicking on green ox all two event automatically call 


// capture phase is on or off

// we can give true or false like given an one so that will help to print grandparent first then parent then child we can on or off capture phase => false/true=> false same order
// true reverse order

// if there is false so it will ececute in bubling phase after another 


// when capture phase is on(true)=> then top se down aayenge : us time pe event ko trigger kar diya jayega

// when capture is off(false)=> At same event hai usko down to up (ubling phase bolte hai,) ta tigger kiys jayega



// with help of e.target we can easily identify that where in that div is clicked


//now removing the event listner  

//we can do directly parent.removeEventlistner => it is not good approach when we are removing the event 

const parent=document.getElementById("first");
function handleclick(e){
    e.target.textContent="i am clicked "; 
    parent.removeEventListener('click',handleclick);// now it perform once 
}

parent.addEventListener('click',handleclick);


