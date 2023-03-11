/**
 * 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  
 * de la siguiente forma : (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */

piramideNumeros2();

function piramideNumeros2() {
    let numeroPedido = parseInt(prompt('ingrese un numero menor que 50'));
    if(! isNaN(numeroPedido)&& numeroPedido <=50){
        for (let i = numeroPedido; i >= 1; i--) {
          for (let j = i; j >=1; j--) {
            document.write( i );
          }
          document.write('<br>')
        }
    }else{
        alert('ingrese un numero valido!');
    }
}