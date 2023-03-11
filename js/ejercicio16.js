/**
 * Realiza un script que pida una cadena de texto y la devuelva al revés. 
 * Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */

reversaString(); 

function reversaString(){
    let texto = prompt('ingrese un texto');
    if(texto.length !== 0){
    let textoSeparado = texto.split("");
    let textoSeparadoReversa = textoSeparado.reverse();
    let textoReversa = textoSeparadoReversa.join("");
    document.write(`<p style= "color: black; font-size: 30px">  Su texto es : " ${texto} " y su texto de reversa es: <span style= "color: red; font-size: 30px" > ${textoReversa}</span> </p>`)
    }else {
        alert('ingrese un texto');
    }

}