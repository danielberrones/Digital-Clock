function showTime(){
    let date = new Date();
    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds(); 
    let amPm = "AM";
    
    if (hours === 0) {
        hours = 12;
    }
    
    if (hours > 12) {
        hours -=12;
        amPm = "PM";
    }
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    let time = `${hours}:${minutes}:${seconds} ${amPm}`;
    document.getElementById("Clock").innerText = time;
    document.getElementById("Clock").textContent = time;
    
    setTimeout(showTime, 1000);
}
 
showTime();


