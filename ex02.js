const prompt = require("prompt-sync")();
console.clear();

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
