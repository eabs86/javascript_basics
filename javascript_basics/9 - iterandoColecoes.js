console.log("\n Trabalhando com Operadores Lógicos Encadeados \n");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
let estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

//para identar é ALT+SHIFT+F
const podeComprar = (idadeComprador >= 18 || estaAcompanhada);


//varendo a lista
let contador = 0;
let destinoExiste = false;
while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;  
    }
    contador += 1;
}

if (destinoExiste) {
    console.log("\n Destino existe na lista de destinos \n");
}else{
    console.log("Destino inexistente na lista de destinos");
}

if(podeComprar && destinoExiste){
    console.log("Boa viagem");  
}else{
    console.log("Desculpe, tivemos um erro");
}

// Usando o for

for (let cont = 0; cont < listaDeDestinos.length; cont++) {

    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;  
    }
    
}