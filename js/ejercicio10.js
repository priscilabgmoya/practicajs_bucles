/**
 * 10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
 * Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
 * Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

imprimirTabla(); 

function imprimirTabla(){
    let filas = parseInt(prompt('ingrese cantidad de filas'));
    let columnas = parseInt(prompt('ingrese cantidad de columnas')); 
    if(! isNaN(filas) && !isNaN(columnas) && filas >0 && columnas >0 ){
        let resultado = filas*columnas; 
        document.write('<table border>')
        document.write('<tbody>')
        for (let i = 0; i < filas; i++) {
            document.write('<tr>')
            for (let j = 0; j <columnas; j++) {
                document.write(`<td>${resultado}</td>`)
                resultado --;
            }
            document.write('</tr>')
        }
        document.write('</tbody>');
        document.write('</table>');
    }else{
        alert('ingrese un numero valido');
    }

}