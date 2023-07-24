let alunos = [`Diogo`, `Gabriel`, `Pedro`, `Ingrid`, `Yasmin`, `Ely`, `Lucas`];
let notas = [10, 8.5, 9, 5, 1, 0, 6.5];

let alunosENotas = [alunos, notas];

function exibeNomeENota(nome) {
    //Desestruturando lista. Quando temos arrays de duas dimensões, o código poda ficar confuso tendo que colocar várias índices, por isso podemos desestruturar da seguinte forma;
    const [alunos, notas] = alunosENotas;
    if(alunos.includes(nome)) { //Includes procura em todo o array se há um elemento correspondente ao parâmetro passado
        const indice = alunos.indexOf(nome); //indexOf diz qual o índice do parâmetro passado
        console.log(`${nome} está cadastrado e tirou nota ${notas[indice]}`);
    } else {
        console.log(`Aluno não encontrado`);
    }
}

exibeNomeENota(`Diogo`);