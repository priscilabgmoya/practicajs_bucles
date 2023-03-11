/**
 * 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
 */

obtenerPosicionVocales();

function obtenerPosicionVocales() {
  var frase = prompt('ingrese un texto');
  var fraseMiniscula = frase.toLowerCase();
  var vocalPosicion = 0;
  if (frase.length !== 0) {
    var bandera = true;
    for (let i = 0; i < fraseMiniscula.length; i++) {
    if(bandera !== false){
        const element = fraseMiniscula[i];
        if (element === "a") {
          vocalPosicion = fraseMiniscula.indexOf(element);
          bandera = false;
        }else
        if (element === "e") {
          vocalPosicion = fraseMiniscula.indexOf(element);
          bandera = false;
        }else
        if (element === "i") {
          vocalPosicion = fraseMiniscula.indexOf(element);
          bandera = false;
        }else
        if (element === "o") {
          vocalPosicion =fraseMiniscula.indexOf(element);
          bandera = false;
        }else
        if (element === "u"){
          vocalPosicion = fraseMiniscula.indexOf(element);
          bandera = false;
        }
      }
    }
  } else {
    alert("ingrese un texto");
  }
  document.write(
    `<p style= "color: black; font-size: 30px">  El texto es : " ${frase} " y la posicion de su primera vocal es: <span style= "color: red; font-size: 30px" > ${vocalPosicion}</span> </p>`
  );
}
