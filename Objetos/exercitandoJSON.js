//Desafio 01. Encontrando clientes dentro do arquivo JSON

const dadosClientes = require("./exercitandoJSONClientes.json");
//Em dados clientes teremos um array com diversos objetos, cada um representa um cliente.

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado1 = encontrar(dadosClientes, "nome", "Kirby");
const encontrado2 = encontrar(dadosClientes, "telefone", "19918820860");

//console.log(encontrado1);

//Desafio 02. Filtrando um objeto. Quais clientes possuem apartamento porém não preencheram o campo complemento.

function filtrarApartamentoSemComplemento(dadosClientes) {
    return dadosClientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    })
}

const apartamentosSemcomplemento = filtrarApartamentoSemComplemento(dadosClientes);

console.log(apartamentosSemcomplemento);