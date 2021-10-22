const daysElements = document.getElementById("days");
const hoursElements = document.getElementById("hours");
const minsElements = document.getElementById("mins");
const secondsElements = document.getElementById("seconds");

const finalDate = "14 Feb 2023";

function countdown()  {
    const newFinalDate = new Date(finalDate);
    const currentDate = new Date();

    const totalSeconds = (newFinalDate - currentDate)/1000;
    
    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const mins = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds)%60;

    daysElements.innerHTML = days;
    hoursElements.innerHTML = formatTime(hours);
    minsElements.innerHTML = formatTime(mins);
    secondsElements.innerHTML = formatTime(seconds);
 
}

function formatTime(time){
    return time <10 ?`0${time}` : time;
}


countdown();
setInterval(countdown,1000);


