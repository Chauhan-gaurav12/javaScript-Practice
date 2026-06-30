// creating zomoto application

const orderDetail={
    orderId:12346,
    food:['pizza','Biryani','coke'],
    cost:640,
    customer_name:"Rohit",
    customer_location:"Dwarka",
    resturant_location:"Delhi",
    status:false
}

function placeOrder(orderDetail,Callback){
    console.log(`${orderDetail.cost} Payment is in progress`);

    setTimeout(() => {
        console.log("Payment is received and order get placed");
        orderDetail.status=true;
        Callback(orderDetail);
    }, 3000);
}


function preparingOrder(orderDetail,Callback){
    console.log("Your food prepartion started");

    setTimeout(() => {
        console.log("Your order is now prepared");
        Callback(orderDetail);
    }, 3000);
}
function pickupPrder(orderDetail){
    console.log("Delivery boy is on way to pickup order");

    setTimeout(()=>{
        console.log("your order is now prepred");
    },3000);
}
// placeOrder(preparingOrder);
//preparingOrder()


// IT IS CALLED CALLBACK HELL

placeOrder(orderDetail,()=>{
    preparingOrder(orderDetail,()=>{
        pickupPrder(orderDetail);
    });
});