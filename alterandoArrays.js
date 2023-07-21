//Modificando arrays
let lista = [`Diogo`, `Ellen`, `Gabriel`, `Pedro`, `Douglas`, `Nicole`, `Ryan`, `Neemias`];

//Diferente dos métodos push e pop, o slice não ira alterar o array original;
let primeiraMetade = lista.slice(0, lista.length / 2); //Dividindo o array, primeiro parâmetro de onde começa a semana e segundo parâmetro onde quer que pare, detalhe, ele para uma posição antes do parâmetra, ou seja, como coloquei 4, o último elemento do novo array será o da 3ª posição;
let segundaMetade = lista.slice(lista.length / 2); //Como não passei o segundo parâmetro ele entende que quero ir até o fim do array;

console.log(primeiraMetade);
console.log(segundaMetade);

//Splice remove elementos e coloca outros no lugar, 1º parâmetro qual posição quer começar a retirar, 2º parâmetro quantas posições irá retirar, 3º parâmetro em diante, quais elementso quer adicionar no lugar;
lista.splice(1, 2, `Ingrid`, `Lucas`);
console.log(lista);

//Concat unifica duas listas
let listaUnificada = primeiraMetade.concat(segundaMetade);
console.log(listaUnificada);

//Arrays de duas dimensões
let notasPrimeiraMetade = [10, 8, 7.5, 5];
let alunosEMediasPrimeiraMetade = [primeiraMetade, notasPrimeiraMetade]; //Esse é o array de duas dimensões, um array contendo arrays;
console.log(`O primeiro aluno é o ${alunosEMediasPrimeiraMetade[0][0]} e sua nota foi: ${alunosEMediasPrimeiraMetade[1][0]}`); //Como são dois arrays dentro de um array, você deve colocar duas posições, a primeira que seleciona qual array, e o segundo a posição dentro do array já selecionado.

for(let i = 0; i < alunosEMediasPrimeiraMetade[0].length; i++) {
    console.log(`A ${i+1}ª pessoa se chama ${alunosEMediasPrimeiraMetade[0][i]} e tirou nota: ${alunosEMediasPrimeiraMetade[1][i]}`);
}