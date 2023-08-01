const dadosUsuarios = require("./usuarios.json");

const login = "diogo.asenjo@modalgr.com.br";
const senha = "diogo23";

/* function validandoLogin(lista, chave, valor) {
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
} */

const validandoUsuarioESenha = (lista, chave, valor) => {
    if (lista.find((item) => item[chave].includes(valor))) {
        let index = dadosUsuarios.findIndex((item) => item.usuario === valor);
        return dadosUsuarios[index].senha === senha ? true : false;
    } else {
        return false;
    }
}

/* if(validandoLogin(dadosUsuarios, "usuario", login) && validandoSenha(login)) {
    console.log(`Usuário logado com sucesso`);
} else {
    console.log(`Login ou senha inválidos`);
} */

console.log(validandoUsuarioESenha(dadosUsuarios, "usuario", login));
