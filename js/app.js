//Exercício para mudar status de botões quando pressionados

// Adicional do exercício - Contagem de jogos alugados
let jogosAlugados = 0;
function contarEExibirJogosAlugados() {
    //Mostrar no console o total de jogos alugados
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}



function alterarStatus(id) {
    //Seleciona o jogo clicado baseado em sua id 1, 2 ou 3
    let gameClicado = document.getElementById(`game-${id}`);
    //Seleciona a imagem do jogo clicado dentro da id 1, 2 ou 3
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    //Seleciona o estilo do botão do jogo clicado dentro da 1, 2 ou 3
    let botao = gameClicado.querySelector('.dashboard__item__button');

    //Para testar se o item selecionado está correto
    //let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    //alert(nomeJogo.textContent)

    //Se a variável imagem tiver dentro da lista de classes dela o item com rented
        if (imagem.classList.contains('dashboard__item__img--rented')) {
        //Irá remover a imagem com rented, o botão com return e irá alterar o texto para Alugar
        //Ou melhor: Se o jogo estiver alugado, o botão que irá aparecer é o de devolver. 
        //Clicando nele, vai tirar os status de "alugado" e mudar para "Alugar"
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        //Remove 1 dos jogos alugados
        jogosAlugados--;
        
    } else {
        //Senão irá adicionar a imagem com rented, o botão com return e irá alterar o texto para Devolver
        //Ou melhor: Se o jogo estiver disponível, o botão que irá aparecer é o de Alugar. 
        //Clicando nele, vai tirar os status de "alugar" e mudar para "Devolver"
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        //Adiciona 1 dos jogos alugados
        jogosAlugados++;
    }
    //Adicional do exercício - exibi no console o número de jogos alugados
    contarEExibirJogosAlugados();
}

//Essa parte não foi explicada na aula!!!!
//DOMContentLoaded é um evento que inicia quando a página é carregada e conta a quantidade inicial de jogos
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

