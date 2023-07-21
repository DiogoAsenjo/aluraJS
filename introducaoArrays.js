//Arrays
//São declarados iguais variaveis, estão entre [] e os elementos são separados por vírgula;
//Lembrando que um array começa da posição 0;
let notas = [10, 6.5, 8, 7.5];

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

notas.push(7); //Adicionando um elemento a última posição array;

console.log(notas);

notas.pop();

console.log(notas); //Remove o elemento da última posição do array;