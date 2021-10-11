/*
01) Variables y Operadores
a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length)
*/

//1.a)

var number1 = 5;
var number2 = 3;
var result = number1 + number2;

console.log('1.a) = ', result);

//1.b)

var string1 = 'Mauro';
var string2 = 'Colombo';
var stringConcatenated = string1.concat (' ', string2);

console.log('1.b) = ', stringConcatenated);

//1.c)

var string3 = 'Radium';
var string4 = 'Rocket';
var stringLength = string3.length + string4.length;

console.log('1.c) = ', stringLength);
