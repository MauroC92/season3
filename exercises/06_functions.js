/*
6) Funciones
a -	Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, 
mostrando el valor de dicha variable en la consola del navegador.
b -	A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros 
tiene error y retornar el valor NaN como resultado.
c -	Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
d -	A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el 
número convertido a entero (redondeado).
e -	Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

//6.a)

function calc(a, b){
    return a + b;
}

var result = calc(3, 10);

console.log('6.a) = ', result);

//6.b)

function calcNotNumber(a, b){
    if (typeof a === 'number' && typeof b === 'number') {       
        return a + b;
    } else{ 
        alert('6.b) Parameter Error: one of the inputs is not a number');
        return 'NaN';
    }
}

var result2 = calcNotNumber(3, 'j');

console.log('6.b) = ', result2);

//6.c)

function validateInteger(a) {
    if (a === Math.round(a)) {
        return '6.c) True'
    } else {
        return '6.c) False'
    }
}

console.log(validateInteger(5.2));

//6.d)

function calcNotNumberDecimal(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {       
        alert('6.d) Parameter Error: one of the inputs is not a number');
        return 'NaN';
    } else if (a !== Math.round(a) || b !== Math.round(b)){ 
        alert('6.d) Parameter Error: one of numbers has a decimal, the result will be rounded');
        return Math.round(a + b);
    } else {
        return a + b;
    }
}

var result3 = calcNotNumberDecimal(3, 3.9);

console.log('6.d) = ', result3);

//6.e)

function calcDecimal(a, b){
    if (a !== Math.round(a) || b !== Math.round(b)) {
        alert('6.e) Parameter Error: one of numbers has a decimal, the result will be rounded');
        return Math.round(a + b);
    } else {
        return a + b;
    }
}

function calcNotNumberDecimalRev2(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {  
        alert('6.e) Parameter Error: one of the inputs is not a number');
        return 'NaN';    
    } else{ 
        return calcDecimal(a, b); 
    }
}



var result4 = calcNotNumberDecimalRev2(1, 'k');

console.log('6.e) = ', result4);