const result=document.getElementById('result');

// for this we required start date and today date
setInterval(()=>{
    const current=Date.now()
 
    const olympicTime=new Date(2028,6,14).getTime();

    let timer=olympicTime-current;

    const days=Math.floor((timer)/(1000*60*60*24));
    timer%=1000*60*60*24;

    const hour=Math.floor((timer)/(1000*60*60));
    timer%=1000*60*60;

    const minute=Math.floor((timer)/(1000*60));
    timer%=1000*60;

    const second=Math.floor((timer)/(1000));
    timer%=1000;

    result.textContent=`${days} : Days,  ${hour} : Hours, ${minute} : Minutes, ${second} : Seconds`;
    },1000)
