const prompt = require("prompt-sync")();
console.clear();

/* 
Faça um programa que simule um lançamento de dados. 
Lance o dado 100 vezes e armazene os resultados em um array. 
Depois, mostre quantas vezes cada valor foi conseguido.
*/

let contador = 100;
let arrayDado = [];

while (contador != 0) {
  let lancamentoDado = Math.floor(Math.random() * 6 + 1);
  arrayDado.push(lancamentoDado);
  contador--;
}

console.log(arrayDado);
console.log();
let qtdFace1 = 0;
let qtdFace2 = 0;
let qtdFace3 = 0;
let qtdFace4 = 0;
let qtdFace5 = 0;
let qtdFace6 = 0;

for (let index = 0; index < arrayDado.length; index++) {
  if (arrayDado[index] == 1) {
    qtdFace1++;
  } else if (arrayDado[index] == 2) {
    qtdFace2++;
  } else if (arrayDado[index] == 3) {
    qtdFace3++;
  } else if (arrayDado[index] == 4) {
    qtdFace4++;
  } else if (arrayDado[index] == 5) {
    qtdFace5++;
  } else if (arrayDado[index] == 6) {
    qtdFace6++;
  }
}

console.log(
  `A quantidade de vezes que a face 1 foi obtida é de: ${qtdFace1} vezes.`
);
console.log(
  `A quantidade de vezes que a face 2 foi obtida é de: ${qtdFace2} vezes.`
);
console.log(
  `A quantidade de vezes que a face 3 foi obtida é de: ${qtdFace3} vezes.`
);
console.log(
  `A quantidade de vezes que a face 4 foi obtida é de: ${qtdFace4} vezes.`
);
console.log(
  `A quantidade de vezes que a face 5 foi obtida é de: ${qtdFace5} vezes.`
);
console.log(
  `A quantidade de vezes que a face 6 foi obtida é de: ${qtdFace6} vezes.`
);
