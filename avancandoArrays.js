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
let dados = [5, 4, 8, 10];
let negocios = [8, 7, 10, 4];

function mediaTrilha(notasTrilha) {
    let soma = notasTrilha.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    let media = soma / notasTrilha.length;
    return media;
}

console.log(`A média da sala de Node.js foi ${mediaTrilha(nodeJS)}`);