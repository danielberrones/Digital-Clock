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

function myNumbers () {
    let myArray2 = [];
    for (i = 0; i < 100; i++){
        myArray2.push(Range(2,2000));
    }
    return myArray2;
}




console.log(determineEquality())
console.log(myNumbers())
setInterval(displayTime,1000);
console.log("Will you hire me?")
console.log("I will exceed all expectations as your newest Software Developer")
console.log("I am writing this here because I am wondering if you will read my code")