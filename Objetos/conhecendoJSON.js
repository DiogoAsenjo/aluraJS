// JSON - JavaScript Object Notation, é uma forma de salvar objetos em JS;

//Aqui como escrevemos um objeto em JS;
const cliente = {
    nome: `Diogo`,
    mail: `diogoasenjo@outlook.com`,
    DN: `29/03/1996`,
    cpf: `22745099809`,
    telefones: [`13991908026`, `1332881668`],
    enderecos:{
        rua: `Colômbia`,
        numero: `28`,
        apartamento: true,
        complemento: `Apt 44`,
    },
}

//Aqui como ele deve ser escrito nos arquivos JSON, também está no arquivo cliente.json;
/*
//Obs1.: não declaramos a variável;
{
    //Obs2.: as propriedades estão entre aspas duplas "";
    "nome": `Diogo`,
    "mail": `diogoasenjo@outlook.com`,
    "DN": `29/03/1996`,
    "cpf": `22745099809`,
    "telefones": [`13991908026`, `1332881668`],
    "enderecos":{
        "rua": `Colômbia`,
        "numero": `28`,
        "apartamento": true,
        "complemento": `Apt 44`,
    } //Obs3.: não tem vírgula após a última propriedade;
}
Obs4.: Não permite funções, não permite comentários e suporta apenas tipos primitivos;
*/

//Lendo um arquivo JSON

const dados = require("./cliente.json");
console.log(dados);
console.log(typeof dados);