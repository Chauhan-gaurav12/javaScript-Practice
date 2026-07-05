// async await

// async function always return a promise
// async function greet(){
//     return "rohit";
// }
// const res=greet();
// res.then((data)=> console.log(data));

// but it will hold screen untill api will not fetch api
// const response=await fetch("https://api.github.com/users");
// const data=await response.json();
// console.log(data);
// console.log("hello ji kaise ho"); // it will not print untill data will not come 

// for this we create a solution

// async function github(){
    
//     const response=await fetch("https://api.github.com/users");
//     const data=await response.json();
//     console.log(data);
//     console.log("hello ji kaise ho");
// }
// github();
// console.log("how are you");




// project


async function github(){
    try{
        
        const response=await fetch("https://api.github.com/users");

        if(!response.ok){
            throw new error("Data is not found");
        }
        const data=await response.json();
        
        const parent=document.getElementById("first");
    
        for(let user of data){
            const element=document.createElement("div");
            element.classList.add("user");
            const image=document.createElement("img");
            image.src=user.avatar_url;
    
            const user_name=document.createElement('h2');
    
            user_name.textContent=user.login;
    
            const profile=document.createElement('a');
            profile.href=user.html_url;
            profile.textContent="Visit Profile";
    
            element.append(image,user_name,profile);
            parent.append(element);
        }
    }
    catch(error){
        console.log(" Error ");
    }
}

github();




// but here all process are independent but in erittent code it will untill one will not come another can not be call
// async function userData(){
//     const comment=await fetch("userComment");
//     const photos= await fetch("userPhoto");
//     constchat=await fetch("chat");
// }

// solution of that problem 
// now these all three will execute parellel
// async function userData(params){
//     const[comment,photos,chat]=await Promise.all([fetch("userComment"),fetch("Photos"),fetch("chat")]);
// }