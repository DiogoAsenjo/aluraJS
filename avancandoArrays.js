let alunos = [`Diogo`, `Gabriel`, `Pedro`, `Ingrid`];
let notas = [10, 4.5, 9, 5];


//Método filter, serve para filtrar os itens de um array criando um novo array;
let reprovados = alunos.filter((elem, indice) => {
    return notas[indice] <= 5; //No exemplo, ele só ira retornar caso a nota do elemento seja menor que 5, é como se fosse um return true, a condição for falsa não irá ser adicionado no novo array;
})

console.log(reprovados);