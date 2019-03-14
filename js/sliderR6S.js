let counter = 0;
let icon = document.getElementById("icon0");
icon.classList.add("active");

function increment(){
    counter++;

    if (counter === 6){
        counter = 0;
    }
    document.body.id = "inch" + counter;

    if (counter === 0){
        document.getElementById("text").innerHTML = "Our team";
        let icon = document.getElementById("icon0");
        icon.classList.add("active");
        let previous = document.getElementById("icon5");
        previous.classList.remove("active");
    }

    if (counter === 1){
        document.getElementById("text").innerHTML = "9inch-Rhys";
        let icon = document.getElementById("icon1");
        icon.classList.add("active");
        let previous = document.getElementById("icon0");
        previous.classList.remove("active");
    }
    if (counter === 2){
        document.getElementById("text").innerHTML = "9inch-Michael";
        let icon = document.getElementById("icon2");
        icon.classList.add("active");
        let previous = document.getElementById("icon1");
        previous.classList.remove("active");
    }
    if (counter === 3){
        document.getElementById("text").innerHTML = "9inch-Josh";
        let icon = document.getElementById("icon3");
        icon.classList.add("active");
        let previous = document.getElementById("icon2");
        previous.classList.remove("active");
    }
    if (counter === 4){
        document.getElementById("text").innerHTML = "9inch-Callum";
        let icon = document.getElementById("icon4");
        icon.classList.add("active");
        let previous = document.getElementById("icon3");
        previous.classList.remove("active");
    }
    if (counter === 5){
        document.getElementById("text").innerHTML = "9inch-Morgan";
        let icon = document.getElementById("icon5");
        icon.classList.add("active");
        let previous = document.getElementById("icon4");
        previous.classList.remove("active");
    }
}

function decrement(){
    counter--;



    if (counter < 0){
        counter = 5;
    }
    document.body.id = "inch" + counter;

    if (counter === 0){
        document.getElementById("text").innerHTML = "Our team";
        let icon = document.getElementById("icon0");
        icon.classList.add("active");
        let previous = document.getElementById("icon1");
        previous.classList.remove("active");
    }

    if (counter === 1){
        document.getElementById("text").innerHTML = "9inch-Rhys";
        let icon = document.getElementById("icon1");
        icon.classList.add("active");
        let previous = document.getElementById("icon2");
        previous.classList.remove("active");
    }
    if (counter === 2){
        document.getElementById("text").innerHTML = "9inch-Michael";
        let icon = document.getElementById("icon2");
        icon.classList.add("active");
        let previous = document.getElementById("icon3");
        previous.classList.remove("active");
    }
    if (counter === 3){
        document.getElementById("text").innerHTML = "9inch-Josh";
        let icon = document.getElementById("icon3");
        icon.classList.add("active");
        let previous = document.getElementById("icon4");
        previous.classList.remove("active");
    }
    if (counter === 4){
        document.getElementById("text").innerHTML = "9inch-Callum";
        let icon = document.getElementById("icon4");
        icon.classList.add("active");
        let previous = document.getElementById("icon5");
        previous.classList.remove("active");
    }
    if (counter === 5){
        document.getElementById("text").innerHTML = "9inch-Morgan";
        let icon = document.getElementById("icon5");
        icon.classList.add("active");
        let previous = document.getElementById("icon0");
        previous.classList.remove("active");
    }
}


function img0() {
    document.body.id = "inch0"
    document.getElementById("text").innerHTML = "Our team";
    counter = 0;
    for (let i =0;i < 6;i++){
        let r = document.getElementById("icon"+i);
        r.classList.remove("active");
    }
    let icon = document.getElementById("icon0");
    icon.classList.add("active");

}

function img1() {
    document.body.id = "inch1"
    document.getElementById("text").innerHTML = "9inch-Rhys";
    counter = 1;
    for (let i =0;i < 6;i++){
        let r = document.getElementById("icon"+i);
        r.classList.remove("active");
    }
    let icon = document.getElementById("icon1");
    icon.classList.add("active");
}

function img2() {
    document.body.id = "inch2"
    document.getElementById("text").innerHTML = "9inch-Michael";
    counter = 2;
    for (let i =0;i < 6;i++){
        let r = document.getElementById("icon"+i);
        r.classList.remove("active");
    }
    let icon = document.getElementById("icon2");
    icon.classList.add("active");
}

function img3() {
    document.body.id = "inch3"
    document.getElementById("text").innerHTML = "9inch-Josh";
    counter = 3;
    for (let i =0;i < 6;i++){
        let r = document.getElementById("icon"+i);
        r.classList.remove("active");
    }
    let icon = document.getElementById("icon3");
    icon.classList.add("active");
}

function img4() {
    document.body.id = "inch4"
    document.getElementById("text").innerHTML = "9inch-Callum";
    counter = 4;
    for (let i =0;i < 6;i++){
        let r = document.getElementById("icon"+i);
        r.classList.remove("active");
    }
    let icon = document.getElementById("icon4");
    icon.classList.add("active");
}

function img5() {
    document.body.id = "inch5"
    document.getElementById("text").innerHTML = "9inch-Morgan";
    counter = 5;
    for (let i =0;i < 6;i++){
        let r = document.getElementById("icon"+i);
        r.classList.remove("active");
    }
    let icon = document.getElementById("icon5");
    icon.classList.add("active");
}

windows.addEventListener("scroll", () =>{
    console.log("hi");
})