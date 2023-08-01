const dadosUsuarios = require("./usuarios.json");

//console.log(dadosUsuarios[0]);

const login = "samyra.lima@modalgr.com.br";
const senha = "rhmaneiro2021";

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


if(validandoLogin(dadosUsuarios, "usuario", login) && validandoSenha(login)) {
    console.log(`Usuário logado com sucesso`);
} else {
    console.log(`Login ou senha inválidos`);
}
