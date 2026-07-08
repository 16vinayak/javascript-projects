let today = new Date();
// 1. DOM Select
let timeEl = document.querySelector(".time");
let dateEl = document.querySelector(".date_day");

// Update Format
function formatTime(number)
{
    if(number < 10){
        return "0" + number
    }
    else
    return number
}

// 2. Function
function updateClock()
{
    let today = new Date();
    let noon;

    let h = today.getHours();
    if(h>=12)
    {
        noon = "PM";
    }
    else
    {
        noon = "AM";
    }
    if(h==0)
    {
        h = 12;
    }
    else if(h>12)
    {
        h -= 12;
    }
    h = formatTime(h);
    let m = today.getMinutes();
    m = formatTime(m);
    let s = today.getSeconds();
    s = formatTime(s);

    timeEl.textContent = h + ":" + m + ":" + s + " " + noon;
}

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function updateDate()
{
    let today = new Date();

    let day = days[today.getDay()];
    let date = today.getDate();
    date = formatTime(date);
    let month = months[today.getMonth()];
    let year = today.getFullYear();

    dateEl.textContent = day + ", " + date + " " + month + " " + year;
}

// 3. Ek baar call
updateClock();
updateDate();

// 4. Har second call
setInterval(function(){

updateClock();

updateDate();

},1000)
