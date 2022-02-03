

//localStorage

let diaSemana = "Jueves";

localStorage.setItem('diaSemanal', diaSemana);

console.log(localStorage.getItem('diaSemanal'));


let navegacionAngel = {
    articulos : {
        articulo1 : "Portátil Lenovo",
        articulo2 : "Ratón",
        articulo3 : "Monitor"
    },
    busquedas : 5
}


localStorage.setItem('datosAngel', JSON.stringify(navegacionAngel));


let resultadoDatosAngel = JSON.parse(localStorage.getItem('datosAngel'));

console.log(resultadoDatosAngel);


//limpiando un elemento en concreto del localStorage

localStorage.removeItem('datosAngel');

//limpio la app localStorage por COMPLETO

localStorage.clear();