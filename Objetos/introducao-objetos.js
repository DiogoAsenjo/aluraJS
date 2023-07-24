//O que são objetos? Em JS, um objeto é uma entidade independente com propriedades e tipos;

const cliente = { //Aqui temos o objeto cliente, suas propriedades são nome, e-mail, etc, dessa forma, ao invés de acessar os dados por índice como num array, podemos dar nomes a essas propriedades;
    nome: `Diogo`,
    mail: `diogoasenjo@outlook.com`,
    DN: `29/03/1996`,
    cpf: `22745099809`,
}

console.log(`Bem vindo ao nosso site ${cliente.nome}!`);
console.log(`Bem vindo ao nosso site ${cliente["nome"]}!`); //Ao invés do ."propriedade", podemos utilizar os colchetes;

