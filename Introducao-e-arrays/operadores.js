//Operadores
// = serve para declarar uma variável;
// == compara os valores dentro da variável (comparação implícita);
// === compara os valores e o tipo da variável;

let numNumber = 5;
let numString = `5`;

console.log(numNumber == numString); //True
console.log(numNumber === numString); //False

// || é ou
// && é e
//!= e !== é diferente e estritamente diferente

//Operador ternário
const idadeMinima = 18;
let idadeCliente = 18;

if(idadeCliente < idadeMinima) {
    console.log(`Não pode beber!`);
} else {
    console.log(`Tá liberado!`);
}

// Os dois códigos fazem a mesma coisa, mas na linha abaixo temos o operador ternário;

idadeCliente < idadeMinima ? console.log(`Não pode beber`) : console.log(`Tá liberado!`);

//Template literal
const nome = `Diogo`;
let apresentacao = `Meu nome é ${nome}`;
console.log(apresentacao);