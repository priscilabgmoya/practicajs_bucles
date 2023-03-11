/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido indicarlo en un mensaje.
 */
esMayorDe18()
function esMayorDe18(){
    var edad = parseInt(prompt('ingrese una edad'));

    if(edad >= 18 && edad <=  80 ){
        alert('usted puede tener licencia para conducir');
    }else{
        alert('ingrese una edad valida!! ')
    }
}
