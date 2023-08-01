const dadosUsuarios = require("./usuarios.json");

//console.log(dadosUsuarios[0]);

const login = "samyra.lima@modalgr.com.br";
const senha = "xpto2020";

function validandoLogin(lista, chave, valor) {
    if (lista.find((item) => item[chave].includes(valor))) {
        return true;
    } else {
        return false;
    }
}

function validandoSenha(login) {
    let index = dadosUsuarios.findIndex((item) => item.usuario === login);
    if(dadosUsuarios[index].senha === senha) {
        return true;
    } else {
        return false;
    }
}

console.log(validandoLogin(dadosUsuarios, "usuario", login));
console.log(validandoSenha(login));