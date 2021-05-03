
var numero_1;
var numero_2;
var operacion;

/* Sintaxis de una FUNCIÓN */
function inicio (){ 
    numero_1 = prompt ("Ingrese un número:");
    numero_2 = prompt ("Ingrese otro número:");

    numero_1 = parseFloat(numero_1) /* Transforma una CADENA (Texto) a un NÚMERO DECIMAL */
    numero_2 = parseFloat(numero_2) 

}

function sumar (){ 
    /* Sintaxis del IF / ELSE */
    if (numero_1 == undefined && numero_2 == undefined  || isNaN(numero_1) || isNaN(numero_2)
    ){
    alert ("Por favor inserte un número. Haga Click en Iniciar");
    (inicio)
    }
    else{
        operacion = numero_1 + numero_2;
        console.log("El resultado de la suma de " + numero_1 + " + " + numero_2 + " es: " + operacion);
        result.innerHTML = ("Result is: " + operacion);
    } 
}

function restar (){
    if (numero_1 == undefined && numero_2 == undefined  || isNaN(numero_1) || isNaN(numero_2)
    ){
        alert ("Por favor inserte un número. Haga Click en Iniciar");
        (inicio)
        }
    else{
        operacion = numero_1 - numero_2;
        console.log("El resultado de la resta de " + numero_1 + " - " + numero_2 + " es: " + operacion);
        result.innerHTML = ("Result is: " + operacion);
    } 
}

function multiplicar (){
    if (numero_1 == undefined && numero_2 == undefined  || isNaN(numero_1) || isNaN(numero_2)
    ){
        alert ("Por favor inserte un número. Haga Click en Iniciar");
        (inicio)
        }
    else{
        operacion = numero_1 * numero_2;
        console.log("El resultado de la multiplicación de " + numero_1 + " x " + numero_2 + " es: " + operacion);
        result.innerHTML = ("Result is: " + operacion);
    } 
}


function dividir (){
    if (numero_1 == undefined && numero_2 == undefined  || isNaN(numero_1) || isNaN(numero_2)
    ){
        alert ("Por favor inserte un número. Haga Click en Iniciar");
        (inicio)
        }
    else{
        operacion = numero_1 / numero_2;
        console.log("El resultado de la división de " + numero_1 + " / " + numero_2 + " es: " + operacion);
        result.innerHTML = ("Result is: " + operacion);
    } 
}

