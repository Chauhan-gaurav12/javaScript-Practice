let div=document.querySelector("div");
console.log(div);


let id=div.getAttribute("id");
console.log(id);

let cl=div.getAttribute("name");
console.log(cl);

//now we will acces the class name of paragraph

let cla=document.querySelector("p");
console.log(cla);

let kl=cla.getAttribute("class");
console.log(kl);

//console.log(div.setAttribute("id","hello"));

// changing the property of css with help of js 

// div.style.backgroundColor="green";
// div.innerText="Hi my name is Gaurav"; 
// div.style.fontSize="30px";
// div.style.border="black";


let el=document.createElement("button");
el.innerText="Click me ";
console.log(el);

let acces=document.querySelector("div");
acces.append(el);
acces.prepend(el); // this will print the div at starting
//acces.before(el); // print button before the div
//acces.after(el); // display button after div

let newhead=document.createElement("h1");
newhead.innerHTML="<i><b> Hi i am new</b></i>";

let pos=document.querySelector("body").prepend(newhead);  // first body access for position and then we write prepend to add heading

// now removing the paragraph
// let del=document.querySelector("p");
// del.remove();

// newhead.remove();