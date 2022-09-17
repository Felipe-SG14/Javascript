'use strict'


//DOM DOCUMENT OBJECT MODEL


//APUNTANDO A UNA ETQIEUTA U OBJETO POR ID

//PARA CAPTURAR EL CODIGO HTML DENTRO DEL DIV ES CON .INNERHTML
//EN ESTE CASO ES TEXTO
var caja = document.getElementById("micaja");

//APUNTANDO A UN OBJETO POR MEDIO QUERYSELECTOR
// SIN NADA PARA UNA ETIQUETA
// # PARA APUNTAR CON UN ID
// . PARA APUNTAR CON UNA CLASE
var cajas = document.querySelector("#micaja");


//CREANDO UNA FUNCION

function bg_change(color) {
    caja.style.background = color;
}

// //MODIFICAR LO QUE HAY DENTRO DE LA ETIQUETA
// caja.innerHTML = "Modificando texto desde JS";
// //MODIFICANDO ESTILOS
// bg_change("yellow");
// caja.style.padding = "10px";
// caja.style.color = "white";


// //SE PUEDE MODIFICAR LA CLASE
// caja.className = "Modificando nombre de la clase";


// //CONSEGUIR ELEMENTOS POR SU ETIQUETA

// var todosLosDivs = document.getElementsByTagName('div');

// todosLosDivs[1].innerHTML = "Modificando el primer div";
// todosLosDivs[1].style.background = "blue";

// //todosLosDivs.forEach( (element,index) => {

// var valor;

// for (valor in todosLosDivs) {

//     if ( typeof todosLosDivs[valor].textContent == 'string' ) {
//         //CREAR ELEMENTOS EN HTML
//         var parrafo = document.createElement("p");
//         //SE GUARDA EL VALOR EN UNA VARIABLE QUE CONTIENE EL TEXTO DEL ARREGLO DE DIVS
//         var texto = document.createTextNode(todosLosDivs[valor].textContent)
//         //SE INSERTA EL TEXTO EN ESE MISMO PARRAFO
//         //APEND PARA INSERTAR AL FINAL
//         //PREPEND PARA INSERTAR AL PRINCIPIO
//         parrafo.appendChild(texto);
//         //EL ELEMENTO SE AGREGA A LA SECCION
//         document.querySelector("#miseccion").appendChild(parrafo);
//     }

// };

// console.log(todosLosDivs);

//CONSEGUIR ELEMENTOS POR SU CLASE
var div_rojos = document.getElementsByClassName("rojo");
var div_amarillos = document.getElementsByClassName("amarrillo");

div_amarillos[0].style.background = "yellow";


for (let div in div_rojos) {

    //AL RECORRER UN ARREGLO DE HTML, NO SOLO TE DA LOS OBJETOS SINO TAMBIEN OTRAS PROPIEDADES
    //POR LO QUE HAY QUE USAR UN CONDICIONAL PARA VERFICAR QUE SOLO RECORRA LOS LEMENTOS UE QUERAMOS
    if (div_rojos[div].className == "rojo" ) {
        div_rojos[div].style.background = "red";
    }
}

//QUERY SELECTOR

var id = document.querySelector("#encabezado");
var clase_rojo = document.querySelector(".rojo");

//QUERY SELECTOR NO SELECCIONA TODOS LOS ELEMENTOS QUE TENGAN EL MISMO ID
//O LA MISMA CLASE, SOLO SELECCIONA EL PRIMER ELEMENTO

//PARA SELECCIONAR TODOS LO ELEMENTOS SE UTILIZA:
// querySelectorAll() ---- Buscar documentacion para saber mas

console.log(clase_rojo);
console.log(id);

//console.log(div_rojos);
//console.log(div_amarillos);
//console.log(caja);