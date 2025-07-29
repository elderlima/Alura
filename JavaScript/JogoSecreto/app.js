let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela(`h1`, `Jogo do Número Secreto!`);
exibirTextoNaTela(`p`, `Escolha um número entre 1 a 12.`);

function verificarChute(){
    let chute = document.querySelector(`input`).value;
    if (chute == numeroSecreto){
        exibirTextoNaTela(`h1`, `Acertou!`);
        exibirTextoNaTela(`p`, `Você Descobriu o número secreto com x tentativas.`);
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela(`p`, `O número secreto é menor!.`);
        }else{
            exibirTextoNaTela(`p`, `O número secreto é maior!.`);
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 12 + 1);
}