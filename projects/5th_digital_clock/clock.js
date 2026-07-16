// const div=document.querySelector('div');

// let time=new Date();
// //console.log(time.toLocaleString());

// div.textContent =time.toLocaleTimeString();

// but it will return same time untill we will not refersh it so for this solution we use setinterval


 const div=document.querySelector('div');
setInterval(()=>{
   
    let time=new Date();
    div.textContent =time.toLocaleTimeString();
},1000)
