/*
Pregunta 10
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
*/

let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]); 
console.log(months[10]);

/*
Pregunta 11
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)
*/

let sortedMonths = [...months].sort();
console.log(sortedMonths);

/*
Pregunta 12
Agregar un elemento al principio y al final del array (utilizar unshift y push)
*/

months.unshift("Inicio");
months.push("Fin");
console.log(months);

/*
Pregunta 13
Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

months.shift();
months.pop();
console.log(months);

/*
Pregunta 14
Invertir el orden del array (utilizar reverse).
*/

months.reverse();
console.log(months);

/*
Pregunta 15
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/

let joinedMonths = months.join(" - ");
console.log(joinedMonths);

/*
Pregunta 16
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)
*/

let sliceMonths = months.slice(months.indexOf("Mayo"), months.indexOf("Noviembre") + 1);
console.log(sliceMonths);