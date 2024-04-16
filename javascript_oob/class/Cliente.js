export class Cliente {
    nome;
    #cpf;
   // rg;

    get cpf(){
        return this.#cpf
    }

    constructor(nome, cpf){
        this.nome = nome
        this.#cpf = cpf
    }
}