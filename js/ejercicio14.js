/**
 * 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter 
 * sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

separarTexto(); 

function separarTexto(){
    let texto = prompt('ingrese un texto');
    let textoSeparado = '';
    for (let i = 0; i < texto.length; i++) {
         textoSeparado = textoSeparado  + texto[i] + '-';
    }
    document.write(`<p style= "color: black; font-size: 30px">  El texto es : " ${texto} " y el texto separo por un guion : <span style= "color: red; font-size: 30px" > ${textoSeparado}</span> </p>`)
}