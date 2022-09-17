'use strict'

//BOM -BROSER OBJECT MODEL


//FUNCIONES


//ALTURA Y ANCHURA DE LA PANTALLA
console.log(window.innerWidth);
console.log(window.innerHeight);


//SCREEN
console.log(screen.height);
console.log(screen.width);

//PARA SACAR OBTENER EL URL
//SE PUEDE DAR A HREF UN VALOR PARA MOVERNOS A OTRO LINK

function abrir_ventana(url) {

    window.open(url,"","width=300,height=400");
    
}
console.log(window.location.href);