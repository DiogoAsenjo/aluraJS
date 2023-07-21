//Tipos primitivos: números, strings e booleanos.
//Tipo number
//Caso tente fazer uma operação envolvento uma variável que não é número, o console ira retornar "NaN" (Not a Number);
const meuNumero = 3;

const float1 = 0.3;
const float2 = 0.3;
const string = `Diogo`;
const operacao = float1 * string;
console.log(operacao);

//Tipo string: guardar texto e caracter
//Caso queira que o número seja lido como tipo string, tem que colocar entre as aspas, se não será considerado tipo nunber;
//O operador + pode ser usado para concatenar texto;
const texto1 = `Meu nome é: `;
const texto2 = 'Diogo';
const numeroString = `42`;
console.log(texto1 + texto2);

//Tipo booleano: true or false
console.log(float1 === float2);