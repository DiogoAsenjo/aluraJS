//Callback functions
let notas = [10, 9.5, 6.5, 5];
let totalNotas = 0;

//O método forEach percorre todo o array, porém ele consegue retornar o elemento e o índice, conforme exemplo abaixo;
notas.forEach(function mostrandoElemEIndice(elem, i) { //Aqui, eu utilizei uma callback function, quando uma função é usada como parâmetro de outra função, no caso a mostrandoElemEIndice é parâmetro do método forEach. Para cada elemento do array a função será chamada;
    console.log(`Elemento: ${elem}, Índice: ${i}`);
})

notas.forEach((elem) => {totalNotas += elem}); //A callback function pode ser escrita de qualquer forma, inclusive em arro function;
console.log(totalNotas);

//Método map(). É utilizado para alterar os arrays, porém ele cria um array novo, não altera o original;
let notasAtaulizadas = notas.map((elem) => elem + 1 > 10 ? 10 : elem + 1)
console.log(notasAtaulizadas);

let alunos = [`diogo`, `GABriel`, `PEDRO henrique`];
let nomeAlunosPadrozinados = alunos.map((elem) => elem.toUpperCase());

console.log(nomeAlunosPadrozinados);
