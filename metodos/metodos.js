const nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

const calcularIdade = function(anoAtual) {
    this.idade = anoAtual - this.anoNascimento;
    return this.idade;
};

const pessoa = {
    nome: 'Diego',
    sobrenome: 'Stiehl',
    anoNascimento: 1988,

    nomeCompleto: nomeCompleto,
    calcularIdade,
};

console.log(pessoa);
console.log(pessoa.calcularIdade(2021));

console.log(`Idade armazenada em atributo: ${pessoa.idade}`);

//undefined
if (pessoa.idade) {
    console.log(`Voce tem ${pessoa.idade} anos`);
}

console.log("-------------------------------------");

const outraPessoa = {
    nome: "Luiza",
    sobrenome: "Bagesteiro",
    anoNascimento: 1991,
};

outraPessoa.nomeCompleto = nomeCompleto;
outraPessoa.calcularIdade = calcularIdade;

console.log(outraPessoa);
console.log(`Idade armazenada em atributo: ${outraPessoa.idade}`);
console.log(outraPessoa.calcularIdade(2021));
console.log(`Idade armazenada em atributo: ${outraPessoa.idade}`);

if (outraPessoa.idade) {
    console.log(`Voce tem ${outraPessoa.idade} anos`);
}

console.log("-------------------------------------");

//////////////////////////////

const pessoas = ["Diego", "Fritz", "Franz", "Berlin"];
pessoas.imprimir = function(){
    for (const pessoa of this) {
        console.log(`Pessoa: ${pessoa}`);
    }
};
pessoas.imprimir();