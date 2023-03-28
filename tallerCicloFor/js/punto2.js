var Nentero1 = parseInt(prompt("Ingresa el primer número entero"))
var Nemtero2 = parseInt(prompt("Ingresa el segundo número entero"))
var suma = 0

console.log ("los números del "+Nentero1+" al "+Nemtero2+" son:")

for (i=Nentero1; i<=Nemtero2; i++){
    console.log ("- "+i)    
}

console.log ("La suma total de estos números es: ")

for (i=Nentero1; i<=Nemtero2; i++){

    suma += i;
    
}
console.log (suma)
