import {Cliente} from "./Cliente.js"

export class ContaCorrente {
    static numeroContas = 0;
    agencia;
    _cliente;

    #saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }

    }

    get cliente(){

        return this._cliente
    }

    get saldo(){

        return this.#saldo
    }

    constructor(agencia, cliente){

        this.agencia = agencia;
        this.cliente = cliente; //usar o acessor aqui é ok
        ContaCorrente.numeroContas += 1;
    }

    sacar(valor) {

        if (this.#saldo >= valor) {

            this.#saldo -= valor;
            console.log("Saque realizado!");
            console.log(`Saldo atual R$ ${this.#saldo}`)

        } else {

            console.log("Sem saldo!");
        }
        return this.#saldo
    }

    depositar(valor) {
        if (valor <= 0) {
            // adicionar outras condições aqui
            return;
        } 
        this.#saldo += valor;
        console.log(`Deposito de R$ ${valor} realizado! Saldo atual R$ ${this.#saldo}`)
        return this.#saldo
    }

    transferir(valor, conta) {

        this.sacar(valor);
        conta.depositar(valor);
        console.log(`Transferencia de R$ ${valor} realizada para outra conta! Seu saldo atual é ${this.#saldo}!`)

    }
}