//Classes em JS


//É possível criar uma estrtuta de classe em JS dessa forma.
class aluno {
    constructor(nome, curso, matricula) {
        this.nome = nome;
        this.curso = curso;
        this.matricula = matricula;
    }
}

const diogo = new aluno("Diogo Asenjo", "ADS", "123512");
console.log(diogo);