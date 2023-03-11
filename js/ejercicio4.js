/**
 * 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» 
 * y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

sumaDeNumeros();

function sumaDeNumeros(){
    let sumar_numero= 0;
    do {
        var confirmar = confirm('Seleccione OK para sumar Numeros');
        if(confirmar === true ){
            let numeroIngresado = parseInt( prompt('Escriba el numero a sumar'));
            if(!isNaN(numeroIngresado) && numeroIngresado>=0){
                sumar_numero = sumar_numero+ numeroIngresado;
            }else {
                alert('ingrese un numero valido. Recomendacion: numeros positivos y no palabras!!')
            }
        }
    } while (confirmar !== false);
    document.write(`<p style= "color: black; font-size: 30px">Su suma es:  <span style= "color: red; font-size: 30px" >${sumar_numero}</span></p>`)
}