let listaDeNumerosSorteadors = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha o número entre 1 e 10');    
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}. Parabéns!` ;

        exibirTextoNaTela('p',mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela(`p`, `O número secreto é menor!`);
        }else{
            exibirTextoNaTela(`p`, `O número secreto é maior!`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteadors.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteadors = [];
    }
    if(listaDeNumerosSorteadors.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteadors.push(numeroEscolhido);
        console.log(listaDeNumerosSorteadors);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}