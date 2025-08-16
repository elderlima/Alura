// Vamos criar a função Sortear
function sortear() {
    // Nesta função, iremos criar as variáveis abaixo (let variável) que receberam
    // os dados de um documento HTML (document.)
    // este elemento que iremos utilizar será o ID (getElementById) que esta especificado entre parenteses
    // como também, este elemento precisa ser um número inteiro (parseInt)
    // e deste elemento, iremos armazenar o valor (.value) que será inserido pelo usuário em nossa variável
    //
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    //
    // Mostre na tela o que esta entre parenteses
    // alert(`Quantidade = ${quantidade}`);
    // alert(`De = ${de}`);
    // alert(`Até = ${ate}`);


}

//Criar uma função para gerar um número aleatório entre o valor das variáveis "De" e o "Ate" da função Sortear
function obterNumeroAleatorio(min, max) {
    
}