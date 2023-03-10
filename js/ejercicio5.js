/**
 * 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

 */

mostarLetraDni();

function mostarLetraDni() {
  let sumar_numero = 0;
  do {
    var confirmar = confirm(
      "Seleccione OK para Descubir que letra le pertenece su DNI"
    );
    if (confirmar === true) {
      let numeroIngresado = parseInt(prompt("Escriba su DNI en el rango entre 0 y 99999999 "));
      if (!isNaN(numeroIngresado) && numeroIngresado >= 0 && numeroIngresado <= 99999999 ) {
        sumar_numero =  numeroIngresado % 23 ;
        consultarLetra(sumar_numero, numeroIngresado);
      } else {
        alert(
          "ingrese un numero valido. Recomendacion: numeros positivos desde 0 hasta 99999999  y no palabras!!"
        );
      }
    }
  } while (confirmar !== false);
}

function consultarLetra(resto, dni) {
  switch (resto) {
    case 0:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >T</span></p>`);
      break;
    case 1:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >R</span></p>`);
      break;
    case 2:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >W</span></p>`);
      break;
    case 3:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >A</span></p>`);
      break;
    case 4:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >G</span></p>`);
      break;
    case 5:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >M</span></p>`);
      break;
    case 6:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >Y</span></p>`);
      break;
    case 7:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >F</span></p>`);
      break;
    case 8:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >P</span></p>`);
      break;
    case 9:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >D</span></p>`);
      break;
    case 10:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >X</span></p>`);
      break;
    case 11:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >B</span></p>`);
      break;
    case 12:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >N</span></p>`);
      break;
    case 13:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >J</span></p>`);
      break;
    case 14:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >Z</span></p>`);
      break;
    case 15:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >S</span></p>`);
      break;
    case 16:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >Q</span></p>`);
      break;
    case 17:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >V</span></p>`);
      break;
    case 18:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >H</span></p>`);
      break;
    case 19:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >L</span></p>`);
      break;
    case 20:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >C</span></p>`);
      break;
    case 21:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >K</span></p>`);
      break;
    default:
        document.write(`<p style= "color: black; font-size: 30px">Su dni es <span style= "color: red; font-size: 30px" >${dni}</span> y letra  es:  <span style= "color: red; font-size: 30px" >E</span></p>`);
      break;
  }
}
