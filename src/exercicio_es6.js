
const alunos = [
    { nome: 'Mariana', nota: 7.5 },
    { nome: 'Lucas', nota: 5.0 },
    { nome: 'Beatriz', nota: 6.0 },
    { nome: 'Carlos', nota: 4.8 },
    { nome: 'Juliana', nota: 9.2 }
];

const filtraAlunosAprovados = (listaDeAlunos) => {
    return listaDeAlunos.filter(aluno => aluno.nota >= 6);
};

const alunosAprovados = filtraAlunosAprovados(alunos);

console.log("--- Lista Completa de Alunos ---");
console.log(alunos);

console.log("\n--- Alunos Aprovados (Nota >= 6) ---");
console.log(alunosAprovados);