/**
 * 12- Realiza un script que genere un número aleatorio entre 1 y 99
 */

numerosRandom();

function numerosRandom(){
    let random = Math.random();
    let superior = 99; 
    let inferior = 1 ; 
    let resultado = Math.floor(random*(superior-inferior));
    document.write(
        `<p style= "color: black; font-size: 30px">Numero Random entre 1 y 99 :  <span style= "color: red; font-size: 30px" >${resultado}</span></p>`
      )
}