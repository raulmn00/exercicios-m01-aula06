const prompt = require("prompt-sync")();
console.clear();
/*
Faça um Programa que peça a idade e a altura de 5 pessoas, 
armazene cada informação no seu respectivo array. 
Imprima a média de idade e de altura.
*/

let idades = [];
let alturas = [];

let somaIdades = 0;
let somaAlturas = 0;

for (let i = 0; i < 5; i++) {
  idades.push(+prompt("Digite uma idade: "));
  somaIdades += idades[i];
}
for (let i = 0; i < 5; i++) {
  alturas.push(+prompt("Digite uma altura: "));
  somaAlturas += alturas[i];
}

let mediaIdades = somaIdades / 5;
let mediaAlturas = somaAlturas / 5;

console.log(
  `A média das idades digitadas foi: ${mediaIdades.toFixed(2)} anos.`
);
console.log(
  `A média das alturas digitadas foi: ${mediaAlturas.toFixed(2)} metros.`
);
