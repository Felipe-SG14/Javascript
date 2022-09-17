'use strict'

//EVENTO LOAD
//PARA ESPERAR A QUE CARGE LOS ELEMENTOS HTML
window.addEventListener('load', function () {
    //EVENTOS DEL RATON
    //SE RECOJE EL EVENTO DEL BOTON
    var boton = document.querySelector("#Boton"); 

    //UNA BUENA PRACTICA ES METER LOE EVENTOS DENTRO DE JAVASCRIPT
    //ES POSIBLE HACERLO CON HTML PERO LO MEJOR SERIA HACERLO CON FULL JS

    function cambiarColor() {

        if (boton.style.background == "green") {
            boton.style.background = "red";
            boton.style.padding = "10px";
        } else {
            boton.style.background = "green";
        }
    }

    //PARA AGREGAR AL EVENTO CLICK DEL BOTON UN FUNCION DE CALLBACK

    //EVENTO CLICK
    boton.addEventListener('click', function () {
        cambiarColor();
    });

    //MOUSEOVER
    boton.addEventListener('mouseover',function () {
        console.log("Mouse esta encima del boton");
        boton.style.background = "#ccc";
    });

    //MOUSEOUT
    boton.addEventListener('mouseout',function () {
        console.log("Mouse salio del boton");
        boton.style.background = "yellow";
    });

    //EVENTOS PARA FORMULARIOS O INPUT

    //FOCUS
    //AL MOMENTO DE SELECCIONAR EL INPUT SE ACTIVA EL EVENTO INPUT
    var inp = document.querySelector("#campo_nombre");
    inp.addEventListener('focus',function () {
        console.log("Se ha activado el evento focus");
    });

    //BLUR 
    //ES SIMILAR A FOCUS PERO AHORA ES CUANDO SE DESELECCIONA
    var inp = document.querySelector("#campo_nombre");
    inp.addEventListener('blur',function () {
        console.log("Se ha salido del evento focus");
    });

    //KEYDOWN
    //SE EJECUTA CUANDO SE PRESIONA UNA TECLA
    var inp = document.querySelector("#campo_nombre");
    inp.addEventListener('keydown',function (event) {
        console.log("Se ha presionado una tecla dentro del input: ", String.fromCharCode(event.keyCode));
    });

    //KEYPRESS
    //CUANDO YA HA SIDO PRESIONADO
    var inp = document.querySelector("#campo_nombre");
    inp.addEventListener('keypress',function (event) {
        console.log("Se ha presionado una tecla dentro del input: ", String.fromCharCode(event.keyCode));
    });

    //KEYUP
    //TECLA SOLTADA
    var inp = document.querySelector("#campo_nombre");
    inp.addEventListener('keyup',function (event) {
        console.log("Se ha presionado una tecla dentro del input: ", String.fromCharCode(event.keyCode));
    });
    
} );