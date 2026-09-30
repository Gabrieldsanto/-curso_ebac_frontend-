class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log(`O ${this.modelo} está ligado.`);
    }

    desligar() {
        this.ligado = false;
        console.log(`O ${this.modelo} está desligado.`);
    }

    exibirInformacoes() {
        console.log(`Veículo: ${this.marca} ${this.modelo} (${this.ano})`);
    }
}

//  Classe Herdeira 
class CarroPasseio extends Veiculo {
    constructor(marca, modelo, ano, capacidadePassageiros) {
        super(marca, modelo, ano);
        this.capacidadePassageiros = capacidadePassageiros;
    }

    // Polimorfismo
    exibirInformacoes() {
        console.log(`Carro de Passeio: ${this.marca} ${this.modelo} (${this.ano}) - Capacidade: ${this.capacidadePassageiros} pessoas`);
    }
}

//  Segunda Classe Herdeira 
class CarroEsportivo extends Veiculo {
    constructor(marca, modelo, ano, velocidadeMaxima) {
        super(marca, modelo, ano);
        this.velocidadeMaxima = velocidadeMaxima;
    }

    acelerar() {
        console.log(`O ${this.modelo} acelerou forte até ${this.velocidadeMaxima} km/h!`);
    }

    // Polimorfismo
    exibirInformacoes() {
        console.log(`Carro Esportivo: ${this.marca} ${this.modelo} (${this.ano}) - Vel. Máxima: ${this.velocidadeMaxima} km/h`);
    }
}

// Instanciação dos objetos 
const carro1 = new CarroPasseio('Fiat', 'Pulse', 2026, 5);
const carro2 = new CarroPasseio('Toyota', 'Corolla', 2024, 5);
const carro3 = new CarroEsportivo('Porsche', '911 Carrera', 2025, 293);


carro1.exibirInformacoes();
carro1.ligar();

carro2.exibirInformacoes();

carro3.exibirInformacoes();
carro3.ligar();
carro3.acelerar();