"use strict"

var ingreso=prompt("escriba su ingreso mensual");
var resp=prompt("desea calcular el ahorro recomendado de 20% u otro porcerntaje?(si/no)");

var total




function ahorro() {
    if (resp=="si") {
        total=ingreso*0.2
        
    }else{
        var otro =prompt("Ingrese el porcentaje deseado")
        total=ingreso*(otro/100)
    }
    return total
}
alert("su ahorro sugerido es de:" + ahorro())



function cambia(n,r) {
    if (r=="si") {
        document.getElementById(n).style.background= "#c0e8f4"
    } else{
        document.getElementById(n).style.background= ""
    }
}