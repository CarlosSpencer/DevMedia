import entradaDados from 'readline-sync';

let x = entradaDados.question("Informe o valor de x: ");
let y = entradaDados.question("Informe o valor de y: ");

let calculo = Number(x) + Number(y);

console.log("Resultado: "+calculo);