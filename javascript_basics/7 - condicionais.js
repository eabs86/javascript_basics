console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
let estaAcompanhada = true;
//para identar é ALT+SHIFT+F
if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    console.log(`Destino comprado:` + listaDeDestinos[1]);
    listaDeDestinos.splice(1, 1);
} else if ((estaAcompanhada)) {
    console.log("Comprador menor de idade");
    console.log("Comprador esta acompanhado");
    console.log(`Destino comprado:` + listaDeDestinos[0]);
    listaDeDestinos.splice(0, 1);
} else {
    console.log("Comprador menor de idade");
    console.log("Comprador não esta acompanhado");
}

