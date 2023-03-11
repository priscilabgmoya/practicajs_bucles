/**
 * 15- Realiza un script que cuente el número de vocales que tiene un texto.
 */

cantidadVocales();

function cantidadVocales() {
  var frase = prompt("ingrese un texto");
  frase.toLowerCase();
  var cantidadDeVocales = 0;
  for (let i = 0; i < frase.length; i++) {
    const element = frase[i];
    switch (element) {
      case "a":
        cantidadDeVocales = cantidadDeVocales + 1;
        break;
      case "e":
        cantidadDeVocales = cantidadDeVocales + 1;
        break;
      case "i":
        cantidadDeVocales = cantidadDeVocales + 1;
        break;
      case "o":
        cantidadDeVocales = cantidadDeVocales + 1;
        break;
      case "u":
        cantidadDeVocales = cantidadDeVocales + 1;
        break;
    }
  }
  document.write(`<p style= "color: black; font-size: 30px">  Su texto es : " ${frase} " y la cantidad de vocales son: <span style= "color: red; font-size: 30px" > ${cantidadDeVocales}</span> </p>`)
}
