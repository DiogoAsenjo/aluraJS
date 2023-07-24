let alunos = [`Diogo`, `Gabriel`, `Pedro`, `Ingrid`];
let notas = [10, 4.5, 9, 5];


//Método filter, serve para filtrar os itens de um array criando um novo array;
let reprovados = alunos.filter((elem, indice) => {
    //Como nesse caso o elemento não será utilizado, ao invés de passar como parâmetro eu posso substituir apenas por um _;
    return notas[indice] <= 5; //No exemplo, ele só ira retornar caso a nota do elemento seja menor que 5, é como se fosse um return true, a condição for falsa não irá ser adicionado no novo array;
})

console.log(reprovados);

//Método reduce
let nodeJS = [10, 5, 8, 6];

function mediaTrilha(notasTrilha) {
    let soma = notasTrilha.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0); //No reduce, são usados dois parâmetros, a função callback e o valor inicial do acumulador, ou seja, ao invés de declarar uma variável em escopo global fora da função e dar o valor de 0, no reduce você dá o valor de 0 como segundo parâmetro. 

    let media = soma / notasTrilha.length;
    return media;
}

console.log(`A média da sala de Node.js foi ${mediaTrilha(nodeJS)}`);

//Spread operator
let dados = [5, 4, 8, 10];

//let novosDados = dados; Caso eu escreva o código desse jeito, o JS entenderá que os arrays dados e novosDados são o mesmo, caso faça alteração em algum, ela será aplicada nos dois!, para criar um clone de um array, preciso usar o spread operador, conforme linha abaixo;

let novosDados = [17, ...dados, 21];//Caso já precisa adicionar novos dados, ao invés de dar um push na outra linha, eu já posso adicionar ao novo array separando com vírgula; 
novosDados.push(42);

console.log(novosDados);
console.log(dados);

//Set - retirando dados repetidos;
let contagem = [1, 1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9, 9, 10, 10];

//let contagemSemRepetidos = new Set(contagem); //O set não possui elementos repetidos, o problema é que ele não cria uma nova lista/array, mas sim uma classe;

//let contagemSemRepetidosLista = [...contagemSemRepetidos]; //Para transformar em lista basta usar o spread operator hehe;

let contagemOrdenada = [...new Set(contagem)];

console.log(contagemOrdenada);