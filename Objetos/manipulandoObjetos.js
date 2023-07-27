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

//E obviamente, como se trata de um array, podemos usar métodos de array para adicionar novos elementos, ou para qualquer outra coisa, filter(), map(), etc.;
cliente.endereço.push({
    rua: `Visconde de Rio Branco`,
    numero: `02`,
    apartamento: true,
    complemento: `6º andar`,
})

//console.log(cliente);


//Funções como propriedade de um objeto;
cliente.saldo = 300; //Adicionando propriedade saldo ao objeto cliente;
cliente.efetuaPagamento = function(valor) { //Aqui estamos adicioando a função como propriedade, ela irá verificar se é possível ou não fazer a compra;
    if(valor > this.saldo) { //Dá pra usar o this.propriedade, para utilizar o o valor dentro do objeto;
        console.log(`Saldo insuficiente`);
    } else {
        this.saldo -= valor;
        console.log(`Pagamento realizado! Saldo atual: ${this.saldo}`);
    }
};

cliente.efetuaPagamento(150);

console.log(cliente);