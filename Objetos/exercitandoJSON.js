//Desafio 01. Encontrando clientes dentro do arquivo JSON

const dadosClientes = require("./exercitandoJSONClientes.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado1 = encontrar(dadosClientes, "nome", "Kirby");
const encontrado2 = encontrar(dadosClientes, "telefone", "19918820860");

//console.log(encontrado1);

//Desafio 02. Filtrando um objeto

const clientesComApartamento = dadosClientes.filter((item) => item.endereco.apartamento === true);
console.log(clientesComApartamento);