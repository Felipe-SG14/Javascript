'use strict'

//TRY CATCH

window.addEventListener('load', () => {

    var year = 2021;
    
    try {

        alert(year);
        //console.log(decodeURIComponent("%%"));

    } catch (error) {
        console.log(error);
        alert("Hay un error en el codigo");
    }

});