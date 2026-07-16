
let count=0;
const countvalue=document.getElementById('count-value');

const btnincrease=document.getElementById('btn-increase');
const btndecrease=document.getElementById('btn-decrease');
const reset=document.getElementById('reset');

function updateDisplay(){
    countvalue.textContent=`Counter value is ${count}`;
}

btnincrease.addEventListener('click',()=>{
    count++;
    updateDisplay();
});

btndecrease.addEventListener('click',()=>{
    count--;
    updateDisplay();
});

reset.addEventListener('click',()=>{
    count=0;
    updateDisplay();
})