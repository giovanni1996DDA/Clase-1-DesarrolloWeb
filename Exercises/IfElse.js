/*
Pregunta 17
Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
*/

let randomNum = Math.random();
if (randomNum >= 0.5) {
  alert("Greater than 0.5");
} else {
  alert("Lower than 0.5");
}

/*
Pregunta 18
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:

"Bebe" si la edad es menor a 2 años;
"Niño" si la edad es entre 2 y 12 años;
"Adolescente" entre 13 y 19 años;
"Joven" entre 20 y 30 años;
"Adulto" entre 31 y 60 años;
"Adulto mayor" entre 61 y 75 años;
"Anciano" si es mayor a 75 años.
*/

let age = 45;

if (age < 2) {
  alert("Bebe");
} else if (age <= 12) {
  alert("Niño");
} else if (age <= 19) {
  alert("Adolescente");
} else if (age <= 30) {
  alert("Joven");
} else if (age <= 60) {
  alert("Adulto");
} else if (age <= 75) {
  alert("Adulto mayor");
} else {
  alert("Anciano");
}