let alunos = [`Diogo`, `Gabriel`, `Pedro`, `Ingrid`, `Yasmin`, `Ely`, `Lucas`];
let notas = [10, 8.5, 9, 5, 1, 0, 6.5];

let alunosENotas = [alunos, notas];

function exibeNomeENota(nome) {
    if(alunosENotas[0].includes(nome)) { //Includes procura em todo o array se há um elemento correspondente ao parâmetro passado
        const indice = alunosENotas[0].indexOf(nome); //indexOf diz qual o índice do parâmetro passado
        console.log(`${nome} está cadastrado e tirou nota ${alunosENotas[1][indice]}`);
    } else {
        console.log(`Aluno não encontrado`);
    }
}

exibeNomeENota(`Diogo`);