//const p1=fetch("https://api.github.com/users");

//console.log(p1);


// untill this will also return only a promise

// p1.then((response)=>{
//     console.log(response.json());
// })


// it return response but it is not a good approach


// const p2=p1.then((Response)=>{
//     return Response.json();
// })

// p2.then((Response)=>{
//     console.log(Response)
// })


// it is called promise channing 

// fetch("https://api.github.com/users")
// .then((Response)=>{
//     return Response.json();
// }).then((data)=>{
//     console.log(data);
// })

// fetch("https://api.github.com/users")
// .then((Response)=>{
//     return Response.json();
// }).then((data)=>{
//     for(let i=0;i<data.length;i++){
//         const div=document.getElementById("first");
//         const img=document.createElement("img");
//         img.src=data[i].avatar_url;
//         img.style.height="40px";
//         img.style.width="40px";
//         div.append(img);
//     }
// })

// // converting normal object into json format
// const j1={
//     name:"rahul Sharma",
//     age:40,
//     address:"Dwarka",
//     c:undefined
// }
// // convert json

// const json_format=JSON.stringify(j1);

// console.log(json_format);

// const json=`{
//     "name":"Rahul",
//     "agr":30,
//     "address":"mumbai"
// }`;

// console.log(typeof json);

// // java script object from json 

// const jObject=JSON.parse(json);
// console.log(typeof jObject);


// Handling error
// fetch("https://api.github.com/users")
// .then((Response)=>{
//     // manually handlng at time wrong url or not found data
//     if(!Response.ok){
//         throw new Error("Data is not found");
//     }

//     return Response.json();
// }).then((data)=>{
//     for(let i=0;i<data.length;i++){
//         const div=document.getElementById("first");
//         const img=document.createElement("img");
//         img.src=data[i].avatar_url;
//         img.style.height="40px";
//         img.style.width="40px";
//         div.append(img);
//     }
// })
// .catch((error)=>{
//     const par=document.getElementById("first");
//     par.textContent=error.message;
// })


// creating promise by itself
// const p1=new Promise((resolve,reject)=>{
//     resolve("hello");
// })
// console.log(p1);

// const p2=new Promise((resolve,reject)=>{
//     reject("hello");
// })
// p2.then((Response)=>{
//     console.log(Response);
// }).catch((error)=>{
//     console.log(error);
// })



const orderDetail={
    orderId:12346,
    food:['pizza','Biryani','coke'],
    cost:640,
    customer_name:"Rohit",
    customer_location:"Dwarka",
    resturant_location:"Delhi",
    status:false
}

function placeOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log("Payment is received and order get placed");
        orderDetail.status=true;
        resolve(orderDetail);
    }, 3000);
    })
    
}


function preparingOrder(orderDetail){
    console.log("Your food prepartion started");

    return new Promise((resolve,reject)=>{
         setTimeout(() => {
        console.log("Your order is now prepared");
        resolve(orderDetail);
    }, 3000);
    
    })
   
}
function pickupPrder(orderDetail){
    console.log("Delivery boy is on way to pickup order");
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("Order is out for delivery");
        resolve(orderDetail);
    },3000);
    })
   
}

placeOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupPrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error: ",error);
})