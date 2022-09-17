'use strict'

//TIMERS

window.addEventListener('load', () => {

    //AQUI VA LO PRINCIPAL

    //TIMERS

    //FUNCION TIMER
    function intervalo(interval) {
        var time = setInterval(() => {
            console.log("Timer de 1 segundos");
        }, interval);
    }


    //TIMER REPETITIVO
    var tiempo = setInterval(() => {
        console.log("Timer de 3 segundos");

        var encabezado = document.querySelector("h1");

        if (encabezado.style.fontSize == "50px") {
            encabezado.style.fontSize = "20px";
        } else {
            encabezado.style.fontSize = "50px";
        }
    }, 500);

    //TIMER QUE EJECUTA SOLO UNA VEZ
    var tiempo_2 = setTimeout(() => {
        console.log("TimeOut solo le ejecuta 1 vez")
    }, 2000);

    //PARA EL TIEMPO EN BUCLE
    var st = document.querySelector("#stop");
    st.addEventListener('click', () => {
        alert("Has parado el Timer");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");
    start.addEventListener('click', () => {
        intervalo(100);
    });


});