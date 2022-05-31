const prompt = require("prompt-sync")();
console.clear();

let arrayNumeros = [];
let numsPares = [];
let numImpares = [];

let contador = 0;

while (contador < 20) {
  let novoNum = +prompt("Digite um número: ");
  arrayNumeros.push(novoNum);
  contador++;
}

for (let i = 0; i < arrayNumeros.length; i++) {
  if (arrayNumeros[i] % 2 == 0) {
    numsPares.push(arrayNumeros[i]);
  } else {
    numImpares.push(arrayNumeros[i]);
  }
}

console.log("Array todo: ", arrayNumeros);
console.log("Numeros pares: ", numsPares);
console.log("Numeros Impares: ", numImpares);