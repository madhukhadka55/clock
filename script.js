

function clock() {
    const fulldate= new Date();
const hours = fulldate.getHours();
const mins = fulldate.getMinutes();

const secs = fulldate.getSeconds();

document.getElementById('hour').innerHTML=hours;
document.getElementById('minute').innerHTML=mins;
document.getElementById('second').innerHTML=secs;
}

setInterval(clock,1000);