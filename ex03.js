const prompt = require("prompt-sync")();
console.clear();

let notasAlunos = [];
let nomesAlunos = [];

let contador = 0;
let somaNotas = 0;

let qtdAlunos = +prompt("Digite quantos alunos você deseja cadastrar: ");
while (qtdAlunos != 0) {
  nomesAlunos.push(prompt(`Digite o nome do aluno ${contador + 1}: `));
  notasAlunos.push(+prompt(`Digite a nota do aluno ${contador + 1}: `));
  somaNotas += notasAlunos[contador];
  qtdAlunos--;
  contador++;
}
console.log();
for (let i = 0; i < notasAlunos.length; i++) {
  console.log(`Aluno: ${nomesAlunos[i]} - Nota: ${notasAlunos[i]}\n `);
}

let mediaNotas = somaNotas / notasAlunos.length;

console.log(`A média das notas dos alunos foi: ${mediaNotas.toFixed(2)}`);
