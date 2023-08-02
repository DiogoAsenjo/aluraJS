const numeros = [2, 1, 7, 5, 3, 6, 9];

for(let i = 0; i < numeros.length; i++) {
    while(i > 0 && numeros[i] < numeros[i -1]) {
        let menorNumero = numeros[i -1];
        let maiorNumero = numeros[i];

        numeros[i] = maiorNumero;
        numeros[i -1] = menorNumero;

        i--;
    }
}

console.log(numeros);