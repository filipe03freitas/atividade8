const calcularGorjeta = function() {
    if (this.valor < 50){
        this.gorjeta = this.valor * 0.2;
        return this.gorjeta;
    } else if (this.valor >= 50 && this.valor <= 200){
        this.gorjeta = this.valor * 0.15;
        return this.gorjeta;
    } else if (this.valor > 200){
        this.gorjeta = this.valor * 0.1;
        return this.gorjeta;
    }
}

const calcularValorTotal = function() {
    this.valorTotal = parseFloat(this.valor) + parseFloat(this.gorjeta);
}

const toString = function() {
    return `Restaurante ${this.nome} - [Valor: R$ ${this.valor} | Gorjeta: R$ ${this.gorjeta.toFixed(2)} | Total: R$ ${this.valorTotal.toFixed(2)}]`;
}

const restVisitados = parseInt(prompt(`Informe a quantidade de restaurantes visitados: `))

// (-----------------------------------------------------------------------------------------------------------------------------------------------------)

const restaurantes = [];

for (let i = 0; i < restVisitados; i++) {
    const restaurante = {
    
        setNome: function(nome) {
            this.nome = nome;
        },
        setValor: function(valor) {
            this.valor = valor;
        },
        calcularGorjeta,
        calcularValorTotal,
        toString,
    }
    restaurante.setNome(prompt(`Informe o nome do ${i+1}º restaurante: `));
    restaurante.setValor(prompt(`Informe o valor do ${i+1}º restaurante: `));
    restaurante.calcularGorjeta();
    restaurante.calcularValorTotal();

    // Adicionando os valores ao objeto
    restaurantes.push(restaurante)
}


// (-------------------------------------------------------------------------------------------------------------------------------------------)

//Funções
restaurantes.maiorGasto = function() {
    let maior = 0;

    for (let i=0; i < restVisitados; i++) {
        let aux = 0;
        aux = parseFloat(restaurantes[i].valorTotal);

        if (aux >= maior) {
            maior = i;
        }
    }
    return restaurantes[maior];
}

restaurantes.calcularGasto = function () {
    let gastoTotal = 0;

    for (let i = 0; i < restVisitados; i++) {
        gastoTotal += parseFloat(restaurantes[i].valorTotal);
    }
    return gastoTotal;
}

restaurantes.calcularGastoMedio = function() {
    return restaurantes.calcularGasto() / restVisitados;
}

restaurantes.imprimir = function(){
    console.log(`Restaurantes visitados no feriado: ${restVisitados}`);
    console.log('Lista de gastos: ');
    for(let i = 0; i < restVisitados; i++) {
        console.log(`\t${restaurantes[i].toString()}`);
    }
    console.log(`Total gasto: R$ ${restaurantes.calcularGasto().toFixed(2)}`);
    console.log(`Média de gastos: R$ ${restaurantes.calcularGastoMedio().toFixed(2)}`);
    console.log(`Restaurante com maior gasto total: ${restaurantes.maiorGasto().nome} R$${restaurantes.maiorGasto().valorTotal.toFixed(2)}`);
}

// (----------------------------------------------------------------------------------------------------------------------------------------------)

// chamando a função pra imprimir 
restaurantes.imprimir()