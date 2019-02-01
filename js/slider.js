/*function run(interval, imgAmount){
    let counter = 2;
    function func(){
        document.body.id = "inch" + counter;
        counter++;
        if (counter === imgAmount){
            counter = 1;
        }
    }
    var swap = window.setInterval(func, interval);
run(3000, 5);
}*/

let counter = 0;
function increment(){
    counter++;
    if (counter === 5){
        counter = 0;
    }
    document.body.id = "inch" + counter;

    if (counter === 0){
        document.getElementById("text").innerHTML = "Our team";
    }
    if (counter === 1){
        document.getElementById("text").innerHTML = "9inch-Morgan";
    }
    if (counter === 2){
        document.getElementById("text").innerHTML = "9inch-Adam";
    }
    if (counter === 3){
        document.getElementById("text").innerHTML = "9inch-Sharpie";
    }
    if (counter === 4){
        document.getElementById("text").innerHTML = "9inch-David";
    }
}

function decrement(){
    counter--;
    if (counter < 0){
        counter = 4;
    }
    document.body.id = "inch" + counter;

    if (counter === 0){
        document.getElementById("text").innerHTML = "Our team";
    }
    if (counter === 1){
        document.getElementById("text").innerHTML = "9inch-Morgan";
    }
    if (counter === 2){
        document.getElementById("text").innerHTML = "9inch-Adam";
    }
    if (counter === 3){
        document.getElementById("text").innerHTML = "9inch-Sharpie";
    }
    if (counter === 4){
        document.getElementById("text").innerHTML = "9inch-David";
    }
}


