function mensagem() {
    const nome = 'Gabriel';

    console.log(`Olá, ${nome}!`);
}

mensagem();

const botao = document.querySelector('#botao');

botao.addEventListener('click', function() {
    alert('O JavaScript está funcionando!');
});