//24-hour digital clock format 
// HH : MM : SS

const clockContainer = document.querySelector("#clock");
const calendarContainer = document.querySelector("#calendar");
const dayContainer = document.querySelector("#day");

function getCurrentTime(){
    var dateNow = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    var hour = dateNow.getHours();
    var minutes = dateNow.getMinutes();
    var seconds = dateNow.getSeconds();

    var year = dateNow.getFullYear();
    var month = dateNow.getMonth();
    var day = dateNow.getDate();
    var dayName = days[dateNow.getDay()];

    hour = timeUpdate(hour);
    minutes = timeUpdate(minutes);
    seconds = timeUpdate(seconds);

    year = timeUpdate(year);
    month = timeUpdate(month);
    day = timeUpdate(day);
    dayName = timeUpdate(dayName);

    clockContainer.innerHTML = hour + " : " + minutes + " : " + seconds;
    calendarContainer.innerHTML = year + " - " + month + " - " + day;
    dayContainer.innerHTML = dayName ;

    var t = setTimeout(function(){getCurrentTime() }, 1000);

}



function timeUpdate(a){
    if(a < 10){
        return "0" + a;
    } else{
        return a;
    }
}

getCurrentTime()


