var Num1 = parseFloat(prompt("Ingrese el primer valor inicial: "))
var Num2 = parseFloat(prompt("Ingrese el segundo valor final: "))
suma = 0

console.log ("los números comprendidos entre"+Num1+"y "+Num2+"es: ")

for (i=Num1; i<=Num2; i++){
    console.log (i)
}

for (i=Num1; i<=Num2; i++){
    suma = suma+i
}
console.log ("el valor de la suma es: "+suma)