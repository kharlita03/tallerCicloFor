var final = parseInt(prompt ("ingresa hasta que número irá la secuencia de Fibonnaci"));
var anterior = 1
var presente = 0
var resultado = 1

for (i=1; resultado<=final; i++){
    console.log (resultado);
    resultado = anterior+presente;
  
    anterior = presente;
    presente = resultado;

    }
