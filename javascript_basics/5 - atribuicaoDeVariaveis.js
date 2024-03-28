console.log("Trabalhando com atribuição de variáveis");


const idade = 26;
const nome = "Fulano";
const sobrenome = "Ciclano"

console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`);

//nome = nome + sobrenome; //TypeError: Assignment to constant variable.

let nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);