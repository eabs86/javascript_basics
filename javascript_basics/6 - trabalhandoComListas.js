console.log("Trabalhando com Listas");

// maneira ruim de trabalhar
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;  
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos possíveis: ${salvador}, ${saoPaulo} e ${rioDeJaneiro}.`);

// maneira boa de trabalhar

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// Adicionando elementos a lista. É possível fazer isso em uma lista do tipo const  
listaDeDestinos.push(`Curitiba`);
listaDeDestinos.push(`Recife`);

console.log(listaDeDestinos);
console.log(`Destinos possíveis: ${listaDeDestinos}.`);

// Removendo elementos da lista
// Lembrando que a lista inicia pela posição zero
listaDeDestinos.splice(1, 1);   // removendo o elemento da posicao 1
console.log(`Destinos possíveis: ${listaDeDestinos}.`);

// acessando um único elemento

console.log(listaDeDestinos[1],listaDeDestinos[2]);