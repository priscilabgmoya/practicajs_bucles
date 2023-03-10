/**
 * 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
 * Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
 * Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
 */

mostratCadena();

function mostratCadena(){
    let cadenaMostrar ='';
    do {
        var confirmar = confirm('Seleccione OK para Ingresar un texto');
        if(confirmar === true ){
            let textoIngresado = prompt('Escriba el texto');
            cadenaMostrar = cadenaMostrar+ textoIngresado + '- ';
        }
    } while (confirmar !== false);
document.write(`<p style= "color: black; font-size: 30px">Su cadena es:  <span style= "color: red; font-size: 30px" >${cadenaMostrar}</span></p>`)
    
}