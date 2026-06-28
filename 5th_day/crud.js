const new_ele=document.createElement("h2");

new_ele.textContent="Strike is comming";

new_ele.id="second";


//select element 
const ele=document.getElementById("first");
 
// it will insert first
// ele.after(new_ele);
// console.log(new_ele);


// if we want to insert at before so 

ele.before(new_ele);

const newElement2=document.createElement("h3");

newElement2.textContent="Diwali is comming ";

newElement2.id="third";
newElement2.className="heading";


// in this first we give that element where before or after we want to inser our new content. then after/ before after that (which we want to insert);

ele.after(newElement2);


// best way to assign a class to element 
newElement2.classList.add("holi");
newElement2.classList.add("diwali");

//these both class name has been assigned to third id element

// if we want to remove so simply we can remove

// newElement2.classList.remove("diwali");

console.log(newElement2);

const h3_access=document.getElementsByClassName("holi diwali");
console.log(h3_access[0].textContent);

 // now applying the css property with help of js

newElement2.style.backgroundColor="brown";
new_ele.style.color="red";
new_ele.style.fontSize="40px";


// putting element inside the list 

// const list=document.createElement("li");
// list.textContent="Milk";


// const list2=document.createElement("li");
// list2.textContent="Cake";

// const list3=document.createElement("li");
// list3.textContent="Halwa";

// const list4=document.createElement("li");
// list4.textContent="paneer";



// const unorderElement=document.getElementById("listing");



// unorderElement.append(list,list2);

// // prepend method use to insert element at first of all list
// unorderElement.prepend(list3);

// // now if we want to insert element at middle 

// //list.after(list4); //=> it work 

// // if by chance we have not access of milk so we can take access because we have access of parent
// unorderElement.children[1].after(list4);//==> it also will work 

// // console.log(unorderElement.children);


// now according to corprate world 


// this method is very ad for our gui;=> for a long array because we are again and again hitting our Gui 

// const unorderElement=document.getElementById("listing");

// const arr=["milk","Halwa","paneer","tea"];

// for(let food of arr){
//     const list=document.createElement("li");
//     list.textContent=food;
//     unorderElement.append(list);
// }


const unorderElement=document.getElementById("listing");
const fragment=document.createDocumentFragment();

const arr=["milk","Halwa","paneer","tea"];

for(let food of arr){
    const list=document.createElement("li");
    list.textContent=food;
    fragment.append(list); //=> this will not hit our gui it will store only inside memory
}
unorderElement.append(fragment);




// this work can we done with help of array ;
const arr1=["Faluda","Rabri","Butter","Chaap"];
const new_arr=[];
for(let food of arr1){
    const new_lis=document.createElement("li");
    new_lis.textContent=food;
    new_arr.push(new_lis);
}
unorderElement.append(...new_arr);


// deleting the element 

const s1=document.getElementById("first");

// you will see h2 heading data will remove from the screen
s1.remove();


// .innerHtml => this is used to access the whole element with tag name also 

const lister=document.createElement("li");

lister.textContent="help";
// lister.innerHTML="<h2>Help</h2>"
unorderElement.prepend(lister);