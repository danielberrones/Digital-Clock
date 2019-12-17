// myClockFunction

function displayTime () {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let time = h + ":" + m + ":" + s;
    document.getElementById("MyClock").innerText = time;
}

setInterval(displayTime,1000);
