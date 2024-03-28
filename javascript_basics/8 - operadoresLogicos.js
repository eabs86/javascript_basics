console.log("Trabalhando com Operadores Lógicos Encadeados");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
let estaAcompanhada = false;
//para identar é ALT+SHIFT+F
if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador maior de idade ou é menor de idade e está companhado");
    console.log(`Destino comprado:` + listaDeDestinos[1]);
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador menor de idade e não está acompanhado");

}
