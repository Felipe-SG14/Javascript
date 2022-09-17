'use strict'

//EJERCICIO 1 

/*

    1. Formularios con los campos: Nombre, Apellidos y Edad
    2. Boton de enviar el formulario: eventos submit
    3. Mostrar esos datos por pantalla
    4. Tener un boton que al darle click nos muestra los datos actuales del formulario

*/


//PRIMERO SE CARGA EL LOAD

window.addEventListener('load', () => {

    //PROGRAMA PRINCIPAL
    //EL FORMULARIO SE CREA EN HTML

    //SE CREA LA VARIABLE QUE GUARDA EL FORMULARIO
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display = "none";

    //EVENTO SUBMIT CAPTURADO
    formulario.addEventListener('submit',function () {

        console.log("Informacion Cargada")
        
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);

        //VERIFICANDO LOS DATOS METIDOS
        //PARA LOS FORMULARIOS TAMBIEN SE PUEDEN VERIFICAR CON HTML
        // if (nombre.trim() == null || nombre.trim().lenght == 0) {
        //     alert("El nombre no es valido");
        //     return false;
        // }

        // if (apellido.trim() == null || apellido.trim().lenght == 0 ) {
        //     alert("El apellido no es valido");
        //     return false;
        // }

        // if (edad == null || isNaN(edad) == true || edad <=0 ) {
        //     alert("La edad no es valida");
        //     return false;
        // }
        
        box_dashed.style.display = "block";

        var datos_usuario = [nombre,apellido,edad];

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = datos_usuario[0];
        p_apellido.innerHTML = datos_usuario[1];
        p_edad.innerHTML = datos_usuario[2];

        // for (var dato in datos_usuario) {
        //     let salto = document.createElement('p');
        //     salto.append(datos_usuario[dato]);
        //     box_dashed.append(salto);
        // }

        // box_dashed.append(parrafo);

    });


});