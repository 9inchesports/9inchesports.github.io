function run(interval, imgAmount){
    let counter = 2;
    function func(){
        document.body.id = "inch" + counter;
        counter++;
        if (counter === imgAmount){
            counter = 1;
        }
    }
    var swap = window.setInterval(func, interval);
}

run(3000, 5);


