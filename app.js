/*ex1. Realizar un programa que dado 2 números imprima por consola si el primer numero is mas grande el segundo.*/
/*let num1 = 10;
let num2 = 5;

if (num1 > num2) {
  console.log("Is bigger");
}

/*ex2. Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.*/
/*if (num1 == num2) {
  console.log("are equal");
} else {
  console.log("are diferents");
}/*

/*ex3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si
 son iguales*/
/*if (num1 > num2) {
   console.log(num1 + " is the bigger");
 } else if (num2 > num1) {
   console.log(num2 + " is the bigger");
 }
 if (num1 == num2) {
   console.log("are equal");
 }
/*
 ex4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.*/
/*let num3 = 12;
 if (num2 > num1 && num3 > num1) {
   console.log(num1);
 } else if (num1 > num2 && num3 > num2) {
   console.log(num2);
 } else {
   console.log(num3);
 }
 */
/*
 ex5. Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad
 y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.*/
/*let pers1 = {
   name: "Phineas",
   age: 9,
   size: "1.50 m",
 };

 let pers2 = {
   name: "Ferb",
   age: 11,
   size: "1.57 m",
 };

 if (pers1.size > pers2.size) {
   console.log(pers1.name + " is taller than " + pers2.name);
 } else if (pers2.size > pers1.size) {
   console.log(pers2.name + " is taller than " + pers1.name);
 }

 if (pers1.age > pers2.age) {
   console.log(pers1.name + " is older than  " + pers2.name);
 } else if (pers2.age > pers1.age) {
   console.log(pers2.name + " is older than " + pers1.name);
 }

 /*
 ex6.Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita
 determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir
 mas de 150cm y tener una visión de 8 de 10 como mínimo.*/
/*
 let driver = {
 name: "Misato",
 size: 163,
  vision: 10,
 };

 if (driver.age >= 18 && driver.size >= 150 && driver.vision >= 8) {
 console.log(driver.name + " is availeble to drive.");
 }

 /*ex7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si
 posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así
 como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea
 utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o
 poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee
 $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta,
  y en caso contrario a no querer comprar, mostrar mensaje de despedida.

/*
let entry = {
 name: "Charlie",
 ticket: "normal",
   have: true,
 };

 if (entry.ticket == "vip" || entry.name == "Nani") {
   console.log("Welcome " + entry.name + ". You can come in.");
 }
 else if (entry.have==true) {
     result = confirm("Do you want to use your ticket?");
    if (result==true) {
        console.log("Welcome " + entry.name + ". You can come in.");}
        else{
            result=confirm("Do you want to buy a ticket?");
            if (result==true) {
               let money = prompt("Please enter your money below to pay. It is only $1000");
                   if (money>=1000) {
                       alert("Your payment was successful");
                      console.log("Welcome " + entry.name + ". You can come in.");}
                    else {
                       alert("Your payment could not be made because of insufficient funds");
                      console.log("You can"t enter");
                  }
                }
            else{console.log("You can"t enter");}
            }
        }
    else{
     console.log("You can"t enter");
  }
*/
/*ex8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita 
y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 
intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un 
mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, 
vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes
 si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.
*/
/*
 const numeroIncognita = 4;

 for (let i = 0; i < 3; i++) {
   numeroIngresado = prompt("Ingrese un número del 1 al 10");
   if (numeroIngresado == numeroIncognita) {
     alert("Ganaste, has adivinado el numero.");
   } else if (numeroIngresado > numeroIncognita) {
     alert("El número ingresado es mayor, vuelve a intentarlo.");
   } else {
     alert("El número ingresado es menor, vuelve a intentarlo.");
   }
 }

/*ex9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente
(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor
 a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.*/
/*
  let age=prompt("Ingrese su edad");
 if (age<=12 && age>=0) {
     alert("Eres un infante")
 } else if(age>12 && age<=18){
     alert("Eres un adolescente")
 } else if(age>18 && age<=45){
     alert("Eres un mayor joven")
 } else if(age>45 && age<100){
     alert("Eres un anciano")
 }else if(age>=100){
     alert("¿En realidad tienes esa edad?")
 }

/* ex10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en 
pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que 
uno de los jugadores ha hecho trampa.
*/
/*
 let options = ["PIEDRA", "PAPEL", "TIJERAS"];
 let player1 = prompt("Jugador 1: Ingrese PIEDRA, PAPEL o TIJERAS");
 let player2 = prompt("Jugador 2: Ingrese PIEDRA, PAPEL o TIJERAS");

 if (
   (player1 == options[0] && player2 == options[0]) ||
   (player1 == options[1] && player2 == options[1]) ||
   (player1 == options[2] && player2 == options[2])
 ) {
   alert("Empate");
 } else if (
   (player1 == options[0] && player2 == options[2]) ||
   (player1 == options[1] && player2 == options[0]) ||
   (player1 == options[2] && player2 == options[1])
 ) {
   alert("El ganador es el jugador 1");
 } else if (
   (player1 == options[0] && player2 == options[1]) ||
   (player1 == options[1] && player2 == options[2]) ||
   (player1 == options[2] && player2 == options[0])
 ) {
   alert("El ganador es el jugador 2");
 } else {
   alert("Uno de los jugadores hizo trampa");
 }

/*
11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los 
siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El
 color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para 
 cualquier otro valor: Excelente elección, no lo teníamos pensado.
*/
/*
let colorOptions = prompt('Escribe tu color favorito');

switch (colorOptions) {
  case 'Blanco':
    alert('Falta de color');
    break;
  case 'Negro':
    alert('Falta de color');
    break;
  case 'Verde':
    alert('El color de la naturaleza');
    break;
  case 'Azul':
    alert('El color del agua');
    break;
  case 'Amarillo':
    alert('El color del sol');
    break;
  case 'Rojo':
    alert('El color del fuego');
    break;
  case 'Marrón':
    alert('El color de la tierra');
    break;
  default:
    alert('Excelente elección, no lo teníamos pensado.');
    break;
}
*/

/*
12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación 
ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el 
resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0.
*/
/*
let num1 = prompt('Ingrese el primer número');
let operacion = prompt("Ingrese '+, -, * o /'");
let num2 = prompt('Ingrese el segundo número');

if (operacion == '+') {
  alert(parseInt(num1) + parseInt(num2));
} else if (operacion == '-') {
  alert(parseInt(num1) - parseInt(num2));
} else if (operacion == '*') {
  alert(parseInt(num1) * parseInt(num2));
} else if (operacion == '/') {
  if (num2 !== "0") {
    alert(parseInt(num1) / parseInt(num2));
  } else if (num2 == "0") {
    alert("ERROR");
  }
}
*/
/*
13. Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por 
pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso 
afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table()
 mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que 
 diga: vuelva a intentarlo en 1 mes.
*/

let fName=prompt("Escriba su nombre");
let lName=prompt("Escriba su apellido");
let dniNumber=prompt("Escriba su número de dni");
let birth=prompt("Escriba su fecha de nacimiento");
let adress=prompt("Escriba su domicilio");
let nac=prompt("Escriba su nacionalidad");

let dni ={
  "Nombre":fName,
  "Apellido":lName,
  "DNI":dniNumber,
  "Fecha de Nacimiento":birth,
  "Domicilio":adress,
  "Nacionalidad":nac
}
let resultado=confirm(JSON.stringify(dni)+"\n¿ Los datos ingresados con correctos?")
if (resultado==true) {
  console.table(dni+"Su registro fue exitoso")
} else {
  alert("Vuelva a intentarlo en 1 mes")
}



