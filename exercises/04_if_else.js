/*
04) If Else
a -	Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
b -	Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
    i)	“Bebe” si la edad es menor a 2 años;
    ii)	“Nino” si la edad es entre 2 y 12 años;
    iii)	“Adolescente” entre 13 y 19 años;
    iv)	“Joven” entre 20 y 30 años;
    v)	“Adulto” entre 31 y 60 años;
    vi)	“Adulto mayor” entre 61 y 75 años;
    vii)	“Anciano” si es mayor a 75 años.
*/

//4.a)

var randomNumber = Math.random();

console.log('4.a) Random Number = ', randomNumber);

if (randomNumber >= 0.5) {
    alert('4.a) = Greater than 0,5');
} else {
    alert('4.a) = Lower than 0,5')
}

//4.b)

var age = Math.random() * 100;
age = Math.round(age);

console.log('4.b) Random Age = ', age);

if (age < 2) {
    alert('4.b) = Bebe');    
} else if (age <= 12) {
    alert('4.b) = Niño'); 
} else if (age <=19) {
    alert('4.b) = Adolescente');
} else if (age <=30){
    alert('4.b) = Joven');
} else if (age <=60){
    alert('4.b) = Adulto');
} else if (age <= 75) {
    alert('4.b) = Adulto Mayor');
} else{
    alert('4.b) = Anciano');
}
