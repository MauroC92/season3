/*
02) Strings
a -	Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
b -	Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
c -	Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
d -	Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
e -	Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
f -	Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string 
que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

//2.a)

var tenCharacterWord = 'everything';
var upperTenWord = tenCharacterWord.toUpperCase();

console.log('2.a) = ', upperTenWord);

//2.b)

var tenCharacterWord2 = 'motivation';
var firstFiveCharacter = tenCharacterWord2.substring(0, 5);

console.log('2.b) = ', firstFiveCharacter);

//2.c)

var tenCharacterWord3 = 'friendship';
var lastThreeCharacter = tenCharacterWord3.substring(7);

console.log('2.c) = ', lastThreeCharacter);

//2.d)

var tenCharacterWord4 = 'sTRAWBERRY';
var wordFixed = tenCharacterWord4.substring(0,1).toUpperCase() + tenCharacterWord4.substring(1).toLowerCase();

console.log('2.d) = ', wordFixed);

//2.e)

var tenCharacterSpaced = 'apprec iate';
var spaceSearch = tenCharacterSpaced.indexOf(' ');

console.log('2.e) = ', spaceSearch);

//2.f)

var longString = 'bASKETBALL tOURNAMENT';
var spaceCharacter = longString.indexOf(' ');
var longStringFixed = longString.substring(0,1).toUpperCase() + longString.substring(1,spaceCharacter).toLowerCase() + longString.substring(spaceCharacter++,++spaceCharacter).toUpperCase() 
    + longString.substring(spaceCharacter).toLowerCase(); 

console.log('2.f) = ', longStringFixed);

