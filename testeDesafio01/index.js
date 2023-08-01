const dadosUsuarios = require("./usuarios.json");

console.log(dadosUsuarios[0]);

const login = "";
const senha = "";

function validandoLogin(lista, chave, valor) {
    let validacao = "";
    if(!valor.includes("@modalgr.com.br")) validacao = "Login inválido";

    return validacao;
}

//console.log(validandoLogin(dadosUsuarios, "usuario", "diogoasenjo@modalgr.com.br"));