'use strict'

//FECHAS

//LIBRERIA MATEMATICA INVESTIGAR (Math.)


//OBJETO DATE

var fecha = new Date();

var year = fecha.getFullYear();

//EMPIEZA A CONTAR DESDE 0
var mes = fecha.getMonth();

var dia = fecha.getDate();

var hora = fecha.getHours();

var minute = fecha.getMinutes();

var textoHora = `

    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
    Los minutos son: ${minute}

`;

console.log(textoHora);


