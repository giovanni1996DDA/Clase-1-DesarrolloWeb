/*
Pregunta 4
Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
*/

let strlower = "Hola soy un string en upper";
let strupper = strlower.toUpperCase();

/*
Pregunta 5
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

let strfull = "Hola soy un string en upper";
let strtrimmed = strlower.substring(0, 5);

/*
Pregunta 6
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

let strfull2 = "Hola soy un string en upper";
let strtrimmed2 = strfull2.substring(strfull2.length - 3);
console.log(strtrimmed2);

/*
Pregunta 7
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

let strfull3 = "hola soy un string en upper";
let strfull3Upper = strfull3.toUpperCase();
let strCamel = `${strfull3Upper.substring(0, 1)}${strfull3.substring(1)}`
console.log(strCamel);

/*
Pregunta 8
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

let strWithSpace = "Hola mundo cruel";
let firstSpaceIndex = strWithSpace.indexOf(" ");
console.log(firstSpaceIndex);

/*
Pregunta 9
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

let longWords = "transformacion evolucion";
let spaceIdx = longWords.indexOf(" ");

let word1 = longWords.substring(0, spaceIdx);
let word2 = longWords.substring(spaceIdx + 1);

let formattedWord1 = word1.substring(0, 1).toUpperCase() + word1.substring(1).toLowerCase();
let formattedWord2 = word2.substring(0, 1).toUpperCase() + word2.substring(1).toLowerCase();

let result = formattedWord1 + " " + formattedWord2;
console.log(result);

