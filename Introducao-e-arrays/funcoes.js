//Função declarativa
//Funciona como a declaração de variável var, independende de onde está escrito, inicializado o programa ela já será reconhecida, então eu posso chamar a função antes de ter declarado ela;
function imprimindoTexto(texto) {
    console.log(texto);
}

//Chamando a função
imprimindoTexto(`batata`);

//Usando paramêtros
let num1 = 2;
let num2 = 4;

function soma(n1, n2) { //Quando crio a função, eu posso dar um valor para o parâmetro para caso ele não receba um valor, use o que lhe foi dado;
    return n1 + n2;
}

console.log(soma(num1, num2)); //Aqui usei as variáveis como parâmetro, mas poderia colocar direto 2 números;

//Function expression
//Já na function expression, ela só pode ser chamada depois de ter sido declarada;
const somaExpression  = function(n1, n2) {return n1 + n2};
console.log(somaExpression(num1, num2));

//Arrow function

//Com uma linha
//Não usa chaves e não precisa escrever return
const somaArrow = (n1, n2) => n1 + n2;
console.log(somaArrow(num1, num2));

//Com mais de uma linha
const somaArrow2Linhas = (n1, n2) => {
    if(n1 == 0 || n2 == 0) {
        return `O número deve ser diferente de 0`;
    } else {
        return n1 + n2;
    }
}
console.log(somaArrow2Linhas(num1, num2));