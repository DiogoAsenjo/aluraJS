const livros = [
    {
        "nome": "JavaScript",
        "preço": 25,        
    },
    {
        "nome": "PHP",
        "preço": 15,        
    },
    {
        "nome": "Java",
        "preço": 30,        
    },
    {
        "nome": "Elixir",
        "preço": 50,        
    },
    {
        "nome": "Go",
        "preço": 45,        
    },
    {
        "nome": "Python",
        "preço": 20,        
    }
]

let atual = 0;
let livroMaisBarato = livros[0];

for(let i = 0; i < livros.length; i++) {
    if(livros[i].preço < livroMaisBarato.preço) livroMaisBarato = livros[i];
}

console.log(` O livro mais barato é o de ${livroMaisBarato.nome}, que custa R$${livroMaisBarato.preço}`);

function ordenar(lista, propriedade) {
    const listaOrdenada = lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]) {
            return -1;
        } else if (a[propriedade] > b[propriedade]) {
            return 1;
        } else {
            return 0;
        }
    })

    return listaOrdenada;
}

const maisBaratoProMaisCaro = ordenar(livros, "preço");
const listaOrdemAlfabetica = ordenar(livros, "nome");

console.log(maisBaratoProMaisCaro);