'use strict'

//JSON

//JAVA SCRIPT OBJECT NOTATION
//PUEDE VER COMO UN ARREGLO 

var pelicula = {
    titulo: "TENET",
    año: 2020,
    pais: "EU"
}

//PARA IMPRIMIR EL OBJETO
console.log(pelicula);

//PARA IMPRIMIR LOS PARAMETROS DEL OBJETO
console.log(pelicula.titulo);


//HACIENDO UN ARRAY DE PELICULAS

var peliculas = [
    {titulo: "B VS S", año: 2017, pais:"Francia"},
    pelicula
];

//IMPRIMIENDO EL ARRAY
console.log(peliculas);

//RECORRIENDO EL OBJETO
for (let dato in peliculas) {
    console.log(peliculas[dato]);
}