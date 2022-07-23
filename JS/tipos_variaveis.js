var valor = 4;
console.log(typeof valor);
// Vai imprimir 'number'

var sobrenome = "Silva";
console.log(typeof sobrenome);
// Vai imprimir 'string'

var ligado = true;
console.log(typeof ligado);
// Vai imprimir 'boolean'

var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
console.log(estados);
// (3) ["Rio de Janeiro", "São Paulo", "Bahia"]


//  OPERADORES

var quantidadeVagas = 2 + 5; // resultado: 7
var contratados = 7 - 2; // resultado: 5
var valorContribuicao = 2500 * 0.10; // resultado: 250
var primeiraParcela = 2500 / 2; // resultado: 1250



console.log("texto" + 20); // "texto20"
console.log("texto" + true); // "textotrue"
console.log("texto" + null); // "textonull"
console.log("texto" + undefined); // "textoundefined"
console.log( [1,2,3] + 4 ) // "1,2,34"
console.log( {nome:'José'} + 1 ); // “[object Object]1”

console.log(5 + 20); // 25
console.log(5 + true); // 6
console.log(5 + null); // 5
console.log(true + true); // 2
console.log(true + null); // 1
console.log(null + null); // 0
console.log(null + false); // 0
console.log(5 + undefined); // NaN
console.log(null + undefined); // NaN

//  INCREMENTO E DECREMENTO

var contador = 5;
contador++;
console.log(contador);// contador agora vale 6

console.log(--contador);// contador agora vale 5

var numero = 9;
console.log(++numero);


//  RELACIONAIS

console.log( 21 == 21 ); // vai imprimir true
console.log( 120 == 100); // vai imprimir false

console.log( 11 != 21 ); // vai imprimir true
console.log( 100 != 100); // vai imprimir false

console.log(  "20" == 20  ); // true
console.log(  true == 1 ) ; // true

//  Operadores de igualdade e desigualdade estrita

console.log("21" === 21 ) ; // o resultado será false
console.log(1 === true ) ; // o resultado será false

console.log("21" !== 21 ) ; // o resultado será true
console.log(1 !== true ) ; // o resultado será true


