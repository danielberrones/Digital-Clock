// Setup

function displayTime () {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let time = h + ":" + m + ":" + s;
    document.getElementById("MyClock").innerText = time;
    document.getElementById("MyClock").textContent = time;
}

function determineEquality () {
    let myArray = [];
    for (i = 0; i < 10000; i++){
        myArray.push(i);
    }
    return myArray;
}

console.log(determineEquality())
setInterval(displayTime,1000);