
const parent=document.getElementById("parent")
// console.log(parent);

parent.addEventListener('click',(e)=>{
    // console.log(e.target);
    const child=e.target;
    const body=document.querySelector("body");
    
    body.style.backgroundColor=child.id
})

// we add event on parent because when we click on any button e.target will identify that in which button you have ckicked

// child.id is written because child id is same as color name 