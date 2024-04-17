//conjucion (&&)(AND)
let esEstudiante = true;
let tieneBuenPromedio = true;
if (esEstudiante && tieneBuenPromedio) {
console.log("El estudiante es elegible para la beca");
} else {
console.log("El estudiante no cumple con los requisitos para la beca")
}
/* se declaran las variables es estudiante y tiene buen promedio
las cuales son verdaderas,  luego, si es estudiante y tiene buen promedio entonces 
El estudiante es elegible para la beca sino El estudiante no cumple con los requisitos para la beca*/

//Disyunción
let estaLloviendo = true;
let tengoParaguas = false;
if (estaLloviendo || tengoParaguas) {
console.log("No me mojaré");
} else {console.log("Necesito un paraguas");
}
/* se declaran las variables, esta lloviendo (true) y tengo 
paraguas (false), entonces si esta lloviendo y alguna de las dos
condiciones es verdadera entonces no me mojare, sino
necesito un paraguas */

//negacion
let esDeNoche = false;
if (!esDeNoche) {
console.log("Es de día");
} else {
console.log("Es de noche");
}
/* se declaran la variable es de noche (false) entonces 
si es diferente de noche, es de dia, sino es de noche
  */

//validar acceso a un sistema
let userName = "admin";
let password = "12345";
if (nombreUsuario === "admin" && password === "12345") {
console.log("Acceso concedido");
} else {console.log("Acceso denegado. Verifique sus credenciales");
}
/* se declaran las variables usuario (admin) y contraseña (12345)
entonces si nombre de usuario es identico a admin y contraseña
es identica a 12345 entonces, se da acceso sino, acceso denegado */


//determinar si un numero es divisible por tres 
let numero = 15;
if (numero % 3 === 0 && numero % 5 === 0) {
console.log("El número es divisible por 3 y por 5");
} else {
console.log("El número no es divisible por 3 y por 5");
}
/* se declara la variable = a (15), emtonces si es divisible por tres
y su residuo es 0 y el numero es divisible por 5 y su residuo es 0
entonces El número es divisible por 3 y por 5 sino 
 El número no es divisible por 3 y por 5 */

 //Verificar si un estudiante tiene aprobado un curso y si ha asistido al 80% de las
//clases
let notaExamen = 80;
let asistenciaClases = 0.8;
let notaMinimaAprobacion = 70;
let asistenciaMinimaRequerida = 0.75;
if (notaExamen >= notaMinimaAprobacion && asistenciaClases >= asistenciaMinimaRequerida){
console.log("El estudiante ha aprobado el curso");
} else {
console.log("El estudiante no ha aprobado el curso");
}
/* se declaran las variables notas( ), asistencia ( ), 
notaminima( ), asistenciaminima( ), entonces si la nota de 
examen es mayor o igual notaminima de aprovacion y asitencia
es mayor o igual a asistenciaminima, entonces imprima: El estudiante ha aprobado el curso
sino imprime: El estudiante no ha aprobado el curso */
