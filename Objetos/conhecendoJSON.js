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

const dados = require("./cliente.json"); //Usamos a função require para criar um objeto com os dados do arquivo JSON;
console.log(dados);
console.log(typeof dados);

//Operações com JSON

const clienteEmString = JSON.stringify(dados); //Aqui nós usamos o JSON.stringify(), para transformar o arquivo JSON em uma string, isso pode ser útil para manipular os dados, já que é mais fácil manipular uma string do que um objeto;

console.log(clienteEmString);

const objetoCliente = JSON.parse(clienteEmString); //Também é possível transformar a string em objeto;

console.log(objetoCliente);