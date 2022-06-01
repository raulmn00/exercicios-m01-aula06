const prompt = require("prompt-sync")();
console.clear();
/* 
Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. 
Armazene as informações em duas listas separadas 
e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.
*/

let notasAlunos = [];
let nomesAlunos = [];

let somaNotas = 0;

let qtdAlunos = +prompt("Digite quantos alunos você deseja cadastrar: ");

for (let index = 0; index < qtdAlunos; index++) {
  nomesAlunos.push(prompt(`Digite o nome do aluno ${index + 1}: `));
  notasAlunos.push(+prompt(`Digite a nota do aluno ${index + 1}: `));
  somaNotas += notasAlunos[index];
}
console.log();
for (let i = 0; i < notasAlunos.length; i++) {
  console.log(`Aluno: ${nomesAlunos[i]} - Nota: ${notasAlunos[i]}\n `);
}

let mediaNotas = somaNotas / notasAlunos.length;

console.log(`A média das notas dos alunos foi: ${mediaNotas.toFixed(2)}`);
