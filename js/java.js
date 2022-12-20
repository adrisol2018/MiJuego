

let banderas = ["brasil.svg"," guayana.svg", "angola.svg", "argentina.svg","bolivia.svg","colombia.svg" ];


let correcta = [2,2, 1, 2];

let opciones = [];

opciones.push(["Argentina", "Francia", "Brasil" ])

opciones.push([ "Angola", "Bolivia","Guayana"])

opciones.push(["Angola", "Brasil",  "Bolivia"])


opciones.push(["Brasil", "Argentina", "Bolivia"])

opciones.push(["Colombia", "Argentina", "Bolivia"])

    let posicionActual = 0;

    let cantidadAcertada = 0;

    function comenzarAJugar() {
        posicionActual = 0;
        cantidadAcertada = 0;

        document.getElementById("itemContainer").style.display = "none";
        document.getElementById("pantallaJuego").style.display = "block";
        /* cargarBandera(); */
    }
/* 
    function cargarBandera() {
        if (banderas.length <= posicionActual) {
            terminarJuego();
        }else{

            limpiarOpciones();

            document.querySelector("banderaImg").src = "/img" + banderas[posicionActual];
            document.querySelector("nombre0").innerHTML = opciones[posicionActual][0];
            document.querySelector("nombre1").innerHTML = opciones[posicionActual][1];
            document.querySelector("nombre2").innerHTML = opciones[posicionActual][2];
        }
    }

    function limpiarOpciones() {
        document.querySelector("nombre0").className + "nombre";
        document.querySelector("nombre1").className + "nombre";
        document.querySelector("nombre2").className + "nombre";

        document.querySelector("letra0").className + "letra0";
        document.querySelector("letra1").className + "letra1";
        document.querySelector("letra2").className + "letra2";
    }

    function comprobarRespuesta(opElegida) {
        if (opElegida == correcta [posicionActual]) {
            document.querySelector("nombre", opElegida, "nombreAcertado")
            document.querySelector("letra", opElegida, "letraAcertada")
            cantidadAcertadas++;
        }else{
            document.querySelector("nombre", opElegida, "nombreNoAcertado")
            document.querySelector("letra", opElegida, "letraNoAcertada")

            document.querySelector("nombre", correcta[posicionActual]).className, "nombre nombreAcertado";
            document.querySelector("letra", correcta[posicionActual]).className, "letra letraAcertada";
        }
        
        posicionActual++;
        setTimeout (cargarBandera, 1000);
    }
    
    


    function terminarJuego() {
        document.querySelector("itemContainer").style.display, "none";
        document.querySelector("itemContainer").style.display, "block";

        document.querySelector("correcta").innerHTML, cantidadAcertada;
        document.querySelector("incorrecta").innerHTML, bandera.length, cantidadAcertada;
    }

    function volverALInicio(params) {
        document.querySelector("pantallaFinal").style.display, "none";
        document.querySelector("itemContainer").style.display, "block";
    } */