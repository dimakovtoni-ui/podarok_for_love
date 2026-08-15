const startDate = new Date('2024-07-28T00:00:00');

function updateTimer(){
 const now=new Date();
 let diff=now-startDate;
 const seconds=Math.floor(diff/1000);
 const totalDays=Math.floor(seconds/86400);
 const years=Math.floor(totalDays/365);
 const days=totalDays-years*365;
 const hours=Math.floor((seconds%86400)/3600);
 const minutes=Math.floor((seconds%3600)/60);
 const secs=seconds%60;
 document.getElementById('years').textContent=years;
 document.getElementById('days').textContent=days;
 document.getElementById('hours').textContent=hours;
 document.getElementById('minutes').textContent=minutes;
 document.getElementById('seconds').textContent=secs;
}
updateTimer();
setInterval(updateTimer,1000);
