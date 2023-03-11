/**
 * 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

 */


piramideNumeros3();

function piramideNumeros3() {
    let numeroPedido = parseInt(prompt('ingrese un numero menor que 50'));
    if(! isNaN(numeroPedido)&& numeroPedido <=50){
        for (let i = 1; i <= numeroPedido; i++) {
            for (let j = 0; j < i; j++) {
              document.write( i );
            }
            document.write('<br>')
          }
    }else{
        alert('ingrese un numero valido!');
    }

}