'use strict'

window.addEventListener('load',()=>{


    var formulario = document.querySelector("#formpeliculas");

    formulario.addEventListener('submit',()=>{

        //SE OBTIENE LA PELICULA
        var titulo = document.querySelector("#addpelicula").value;

        //SE VERIFICA SI ESTA VACIO EL FORM
        if (titulo.length == 0) {
            console.log("El form esta vacio");
        } else {
            localStorage.setItem(titulo, titulo);
        }
        
    });

    var formulario2 = document.querySelector("#formpeliculas2");

    formulario2.addEventListener('submit',()=>{

        //SE OBTIENE LA PELICULA
        var titulo = document.querySelector("#deletepelicula").value;

        //SE VERIFICA SI ESTA VACIO EL FORM
        if (titulo.length == 0) {
            console.log("El form esta vacio");
        } else {
            localStorage.removeItem(titulo);
        }
        
    });

    //APUNTANDO A LA LISTA
    var ul = document.querySelector("#peliculas-list");

    //RECORRER
    for (var i in localStorage) {
        if (typeof localStorage[i] == 'string') {
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

});