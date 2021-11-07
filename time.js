const time = document.getElementById('time');
const date = document.getElementById('date');


// Showtime
function showTime() {
    let today = new Date(),
     hour = today.getHours(),
     min = today.getMinutes(),
     sec = today.getSeconds(),
     day = today.getDate(),
     month = today.getMonth(),
     year = today.getFullYear();


     // Set AM or PM
     const amPm = hour >= 12 ? 'PM' : 'AM';

     //12 hour Time || Not ARMY time
     hour = hour % 12 || 12;

     //Output time
     time.innerHTML = `${hour}<span>:</span>${addZero(min)}
     ${day}<span> </span>${month}<span> </span>${year}`;

     setTimeout(showTime, 1000);
   
}

// Add zero
function addZero(n){
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}
//Run
showTime();