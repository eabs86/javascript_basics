
import {Cliente} from "./class/Cliente.js"
import {ContaCorrente} from "./class/ContaCorrente.js"


const cliente1 = new Cliente("Fulano", 123456789 );
const cliente2 = new Cliente("Ciclano", 987654321 );

const conta1 = new ContaCorrente(123,cliente1);

const conta2 = new ContaCorrente(120, cliente2);



console.log(ContaCorrente.numeroContas);





