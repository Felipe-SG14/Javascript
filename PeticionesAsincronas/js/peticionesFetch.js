'use strict'

//PETICIONES FETCH

//FETCH = METODO QUE NOS PERMITE HACER PETICIONES AJAX MAS SIMPLE
//PETICION AJAX = UNA LLAMADA A UN SERVICIO RED O A UN BACKEND QUE DEVUELVE UN RESULTADO
//METODO NUEVO, MEJOR QUE EL DE JQUERY

//JSON PLACEHOLDER FUNCIONARA COMO API (DEVUELVE Y RECIBE OBJETOS EN JSON)
//TAMBIEN ESTA REQRES
//SIMILAR A UNA BASE DE DATOS FALSA

//LAS PROMESAS SON PARA EVITAR TENER UN CALLBACK DENTRO DE OTRO CALLBACK


var usuarios = [];

var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');
var div_profesor = document.querySelector('#profesor');


getUsuarios()
    //json() convierte a obejto json
    //CAPTURAR DATOS
    .then(data => data.json())
    .then(users => {

        listadoUsuarios(users.data);

    })

getJanet()
    .then(data => data.json())
    .then(users => {

        console.log(users.data);

        //HACER UNA PROBMESA
        return getInfo();

    })
    .then(data => {
        div_profesor.innerHTML = data;

        return getJanet();
    })
    //EL METODO ANTERIOR REGRESA UNA PROMESA
    .then(data => data.json())
    .then(janet => {

        //MOSTRAR JANET
        mostrarJanet(janet.data);

    })
    .catch( error => {
        console.log( error + "FFFF" );
        alert("HAY UN ERROR MAI");
    });





function getUsuarios() {
    return fetch('https://reqres.in/api/users?page=2')
}

function getJanet() {
    return fetch('https://reqres.in/api/users/22')
}

function listadoUsuarios(usuarios) {
    usuarios.map((users, i) => {

        let nombre = document.createElement('h2');
        nombre.innerHTML = i + " " + users.first_name + " " + users.last_name
        div_usuarios.appendChild(nombre);

        var loading = document.querySelector("#loading");
        loading.style.display = 'none';

    });
}

//PROMESA DESDE CERO
//CUANDO SE USA UNA PROMESA
//  - LEER ARCHIVOS
//  - ENVIAR POR POST
//  - ENVIAR Y RECIBIR COSAS POR AJAX
function getInfo() {
    //PARA DEVOLVER PROMESAS

    var profesor = {
        nombre:'Victor',
        apellido:'Robles',
        curp:'KFNBKFNK'
    };

    return new Promise((resolve,reject) => {
        
        var profesor_string = "";

        setTimeout(()=>{
            profesor_string = JSON.stringify(profesor);

            if (typeof profesor_string != 'string' || profesor_string=="") {
                return reject('error 1')
            }

            return resolve(profesor_string)

        }, 3000);

    });
}

function mostrarJanet(usuario) {

    let nombre = document.createElement('h2');

    let avatar = document.createElement('img');

    avatar.src = usuario.avatar;
    avatar.width = "100";

    nombre.innerHTML = usuario.first_name + "" + usuario.last_name;
    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);

    let loading2 = document.querySelector("#loading2");
    loading2.style.display = 'none';
    
}