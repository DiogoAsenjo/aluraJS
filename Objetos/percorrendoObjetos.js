const cliente = {
    nome: 'Diogo',
    dn: '29/03/1996',
    mail: 'diogoasenjo@outlook.com',
    telefone: [ '13991908026', '1332881668' ],
    endereco: [
      {
        rua: 'Colôbmia',
        numero: '28',
        apartamento: true,
        complemento: 'apt 44'
      },
      {
        rua: 'Visconde de Rio Branco',
        numero: '02',
        apartamento: true,
        complemento: '6º andar'
      }
    ],
    saldo: 300,
    efetuaPagamento: function(valor) { 
        if(valor > this.saldo) {
            return console.log(`Saldo insuficiente`);
        } else {
            this.saldo -= valor;
            return console.log(`Pagamento realizado! Saldo atual: ${this.saldo}`);
        }
  }
}

console.log(cliente[0]); //As propriedades não são o indíce do objeto, mas sim sua propriedade rs, então no caso, esse console logo irá retornar um undefined;

//Percorrendo o objeto com for in;

for(let chave in cliente) {
  console.log(chave);
} //Isso retornará quais as chaves do objeto cliente, ou seja, nome, dn, etc.;

for(let chave in cliente) {
  let tipo = typeof cliente[chave];
  if(tipo == `object`) {
    console.log(`A chave ${chave}, é um objeto!`)
  } else if (tipo == `function`) {
    console.log(`A chave ${chave}, é uma função`)
  } else {
  console.log(`A chave ${chave}, possui o valor: ${cliente[chave]}`)
  }
}

//Métodos de objetos

const chavesDoObjeto = Object.keys(cliente); //Esse método retorna todas as chaves do objeto cliente em um array; 

if(!chavesDoObjeto.includes(`endereco`)) {
  console.error(`Erro. É necessário cadastrar um endereço`);
} else {
  console.log(`Compra realizada com sucesso`);
}

//Sintaxe de espalhamento, decompondo objetos, também conhecido com spread operator

const encomenda = {
  destinatario: cliente.nome,
  //endereco: cliente.endereco[0], //Aqui no caso, essa propriedade irá receber o valor de um array de objetos do cliente, e caso fosse necessário ter várias propriedades e não um objeto?;
  ...cliente.endereco[0], //Essa é a solução para a linha acima, ao invés de trazer o objeto do endereço, irá criar uma propriedade para cada propriedade do objeto, esses ... é a sintaxe do espalhamento;
}

console.log(encomenda);