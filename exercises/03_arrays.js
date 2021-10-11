/*
03) Arrays
a -	Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
b -	Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
c -	Agregar un elemento al principio y al final del array (utilizar unshift y push).
d - Quitar un elemento del principio y del final del array (utilizar shift y pop).
e -	Invertir el orden del array (utilizar reverse).
f -	Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
g -	Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

//3.a)

var monthList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var monthListCopy = Object.assign([], monthList);

console.log('3.a) = ', monthList[5] + ' y ' + monthList[11]);

//3.b)

monthList.sort();

console.log('3.b) = ', monthList);

//3.c)

monthList.unshift('Mauro');
monthList.push('Colombo');

console.log('3.c) = ', monthList);

//3.d)

monthList.shift();
monthList.pop();

console.log('3.d) = ', monthList);

//3.e)

monthList.reverse();

console.log('3.e) = ', monthList);

//3.f)

console.log('3.f) = ', monthList.join('-'));

//3.g)

monthListCopyCut = monthListCopy.slice(4,11);

console.log('3.g) = ', monthListCopyCut);