alert('Bem-vindo ao Jogo do Número Secreto');
let numeroSecreto = 7;
console.log(numeroSecreto);
let chute;
let tentativas=1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 12');

    if (chute == numeroSecreto){
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}`);
    }else{
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
                alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }

}

