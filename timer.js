const startDate = new Date('2024-07-28T00:00:00');

function updateTimer(){
 const now=new Date();

 let years=now.getFullYear()-startDate.getFullYear();
 let months=now.getMonth()-startDate.getMonth();

 if(now.getDate()<startDate.getDate()) months--;
 if(months<0){
   years--;
   months+=12;
 }

 const periodStart=new Date(
   startDate.getFullYear()+years,
   startDate.getMonth()+months,
   startDate.getDate(),
   startDate.getHours(),
   startDate.getMinutes(),
   startDate.getSeconds()
 );

 let diff=now-periodStart;
 const seconds=Math.floor(diff/1000);
 const days=Math.floor(seconds/86400);
 const hours=Math.floor((seconds%86400)/3600);
 const minutes=Math.floor((seconds%3600)/60);
 const secs=seconds%60;

 document.getElementById('years').textContent=years;
 document.getElementById('months').textContent=months;
 document.getElementById('days').textContent=days;
 document.getElementById('hours').textContent=hours;
 document.getElementById('minutes').textContent=minutes;
 document.getElementById('seconds').textContent=secs;
}

updateTimer();
setInterval(updateTimer,1000);
