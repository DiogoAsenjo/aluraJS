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

//Essa função irá fazer a verificação, ela usa como parâmetro a lista criada;
function filtrarApartamentoSemComplemento(dadosClientes) {
    return dadosClientes.filter((cliente) => { //É usado o método filter, para filtrar o resutado, é usada uma callback function como parâmetro, que no caso, usará cliente, no individual como parâmetro, ele itera todo o array dadosClientes e verifica se a propriedade apartamento é true E se NÃO possui a propriedade complemento, por isso a ! antes.
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    })
}

const apartamentosSemcomplemento = filtrarApartamentoSemComplemento(dadosClientes);

//console.log(apartamentosSemcomplemento);

//Desafio 03. Ordenando objetos.Deixando a lista em ordem alfabética

//Novamente, é criada uma função que irá usar dois parâmetros, o primeiro a lista a ser ordenada e em segudo, de acordo como qual propriedade queremos ordenar;
function ordenar (lista, propriedade) {
    const resultado = lista.sort((a, b) => { //Foi usado o método sort, que irá reordenar uma lista, essa a e b são os elmentos que serão comparados, ler a documentação que irá entender;
        if(a[propriedade] < b[propriedade]) {
            return -1; // Nesta linha, a função de comparação verifica se o valor da propriedade do objeto a é menor que o valor da propriedade do objeto b. Caso essa condição seja verdadeira, significa que o objeto a deve ser colocado antes do objeto b na ordem final;
        } 
        
        if(a[propriedade] > b[propriedade]) {
            return 1; //Já esta linha verifica se o valor da propriedade do objeto a é maior que o valor da propriedade do objeto b. Se sim, isso significa que o objeto a deve ser colocado depois do objeto b na ordem final;
        }
        return 0;//Aqui é para caso tenham o mesmo valor, nesse caso, as duas ficarão na mesma posição;
    });
    return resultado;
}

const listaOrdenada = ordenar(dadosClientes, "nome");
console.log(listaOrdenada);