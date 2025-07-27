alert('Bem-vindo ao Jogo do Número Secreto');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 30');

if (chute == numeroSecreto){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    }else{
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
            }else{
                alert(`O número secreto é maior que ${chute}`);
                }
}