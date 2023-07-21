//let, const e var
//Quando o programa é iniciado, todas as variáveis do tipo var serão lidas imediatamente, independente da posição;
//Usando const, a variável já deve ser criado com um valor que não poderá ser alterado;
//A var é pouquíssimo utilizada pois é muito solta, gera muito bug;

const forma = `retângul`;

let altura = 5;
let comprimento = 10;

if(forma === `retângulo`) {
    area = altura * comprimento;
} else {
    //forma = `batata`;
    area = (altura * comprimento) / 2;
}

console.log(area);
console.log(forma);
var area;

//Truthy and falsy
//O JS considera algumas outras coisas como se fossem booleanadas, como por exemplo 0 e "" são consideradas falsas;

console.log(0 == false); //true no console
console.log("" == false); //true no console
console.log(1 == true); //true no console

//Null e undefined

let varUndefined;
let varNull = null;

console.log(varUndefined);
console.log(varNull);

//Conversão de tipo
//Implícita

const numNumber = 2;
const numString = `2`;

console.log(numNumber == numString);
console.log(numNumber + numString); //Aqui ele concatena os valores, ou seja, a saída sera a string 22 e não o number 4;

//Explícita
console.log(numNumber + Number(numString)); //Aqui a gente converteu a string em number;