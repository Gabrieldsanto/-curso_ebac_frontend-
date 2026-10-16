// Função de multiplicação 
function multiplicacao(a: number, b: number): number {
    return a * b;
}

//  Função de saudação 
function saudacao(nome: string): string {
    return "Olá " + nome;
}


const resultadoMultiplicacao = multiplicacao(5, 4);
const resultadoSaudacao = saudacao("Gabriel");

console.log(resultadoMultiplicacao); 
console.log(resultadoSaudacao);    