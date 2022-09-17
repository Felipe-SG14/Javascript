'use strict'

//EJERCICIO 7

//LOCAL STORAGE
//GUARDAR INFORMACION A MODO DE SESION (MIENTRAS SE NAVEGA)

window.addEventListener('load',()=>{

    //CEHCAR SI EL LOCAL STORAGE ESTA DISPONIBLE
    if (typeof(Storage) !== 'undefined') {
        console.log("Local Storage disponible");
    } else {
        console.log("Incompatible con LocalStorage");
    }

    //GUARDAR DATOS
    //(key, value)
    localStorage.setItem("Titulo", "Curso de Symfony");

    //RECUPERAR ELEMENTO E INGRESARLO EN CODIGO HTML
    console.log(localStorage.getItem("Titulo"));
    document.querySelector("h1").innerHTML = localStorage.getItem("Titulo");

    //GUARDAR OBJETOS JSON
    var usuario = {
        nombre: "Felipe",
        email: "aaaa",
        web: "aaaa"
    }

    //PRIMERO HAY QUE CONVERTIRLO A STRING
    //COVIERTE UN OBJETO JSON A STRING /JSON.stringify/
    localStorage.setItem("Usuario",JSON.stringify(usuario));


    //RECUPERAR OBJETO JSON
    //parse CONVIERTE DE STRING A OBJETO DE JSON
    console.log(JSON.parse(localStorage.getItem("Usuario")));
    var userjs = JSON.parse(localStorage.getItem("Usuario"));

    console.log(userjs.nombre);

    //BORRAR ELEMENTOS DEL LOCAL STORAGE
    localStorage.removeItem("Usuario");
    //localStorage.clear(); ---> Vacia el LOCALSTORAGE
})



