/**
 * 13- Realiza un script que pida un texto y lo muestre en mayúsculas.
 */

pasarFraseMayuscula();

function pasarFraseMayuscula(){
 let texto = prompt('ingrese un texto'); 
 if (texto.length !== 0){
     textoMayuscula = texto.toUpperCase();
     document.write(`<p style= "color: black; font-size: 30px">Su texto en mayuscula es:  <span style= "color: red; font-size: 30px" >${textoMayuscula}</span></p>`)
 }else{
    alert('ingrese un texto');
 }
}
