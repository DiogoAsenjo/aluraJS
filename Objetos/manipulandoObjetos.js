//Tipos de dados de um objeto;

const cliente = {
    nome: `Diogo`,
    dn: `29/03/1996`,
    mail: `diogoasenjo@outlook.com`,
    telefone: [`13991908026`, `1332881668`], //É possível inclusive colocar arrays dentro dos objetos;
}

console.log(cliente.telefone[1]);

//Objetos dentro de objetos. Aqui adicionamos o objeto endereço dentro do objeto cliente;
//Podemos inclusive ter um array de objetos como propriedade de um objeto;

cliente.endereço = [{
    rua: `Colôbmia`,
    numero: `28`,
    apartamento: true,
    complemento: `apt 44`,
},
]

//E obviamente, como se trata de um array, podemos usar métodos de array para adicionar novos elementos;
cliente.endereço.push({
    rua: `Visconde de Rio Branco`,
    numero: `02`,
    apartamento: true,
    complemento: `6º andar`,
})

console.log(cliente);