// myClockFunction

function displayTime () {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let time = h + m + s;
    document.getElementById("theTime").innerText = time;
}

setInterval(displayTime,1000);

console.log("hi javascript");
