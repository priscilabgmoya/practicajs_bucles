/**
 * 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
 */

edadMayor();

function edadMayor(){
    let edad1 =parseInt(prompt('ingrese la primera edad'));
    let nombre1 = prompt('ingrese el primer nombre'); 
    let edad2 =parseInt(prompt('ingrese la segunda edad'));
    let nombre2 = prompt('ingrese el segundo nombre'); 
    let edad3 =parseInt(prompt('ingrese la tercero edad'));
    let nombre3 = prompt('ingrese el tercer nombre'); 

    if(! isNaN(edad1) &&! isNaN(edad2) && ! isNaN(edad3)  ){
        let resultado = Math.max(edad1,edad2,edad3); 
        if(resultado === edad1){
            document.write(`<p style= "color: black; font-size: 30px">El nombre del mayor es:  <span style= "color: red; font-size: 30px" >${nombre1}</span></p>`)
        }
        if(resultado === edad2){
            document.write(`<p style= "color: black; font-size: 30px">El nombre del mayor es:  <span style= "color: red; font-size: 30px" >${nombre2}</span></p>`)
        }
        if(resultado === edad3){
            document.write(`<p style= "color: black; font-size: 30px">El nombre del mayor es: <span style= "color: red; font-size: 30px" >${nombre3}</span></p>`)
        }
    }else{
        alert('ingrese una edad valida');
    }
}