/*
Pregunta 23
Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

function suma(a, b) {
  return a + b;
}
let resultado = suma(4, 6);
console.log(resultado);

/*
Pregunta 24
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

function sumaValidada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros no es un número");
    return NaN;
  }
  return a + b;
}
console.log(sumaValidada(4, "x"));

/*
Pregunta 25
Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
*/

function validateInteger(n) {
  return Number.isInteger(n);
}
console.log(validateInteger(5)); // true
console.log(validateInteger(3.14)); // false

/*
Pregunta 26
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

function sumaEntera(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros no es un número");
    return NaN;
  }
  if (!Number.isInteger(a)) {
    alert("El primer número no es entero, se redondeará");
    a = Math.round(a);
  }
  if (!Number.isInteger(b)) {
    alert("El segundo número no es entero, se redondeará");
    b = Math.round(b);
  }
  return a + b;
}
console.log(sumaEntera(3.7, 4.2));

/*
Pregunta 27
Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

function validarNumeroEntero(n) {
  if (!Number.isInteger(n)) {
    alert("El número no es entero, se redondeará");
    return Math.round(n);
  }
  return n;
}

function sumaFinal(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros no es un número");
    return NaN;
  }
  a = validarNumeroEntero(a);
  b = validarNumeroEntero(b);
  return a + b;
}

console.log(sumaFinal(7.6, 8.3));