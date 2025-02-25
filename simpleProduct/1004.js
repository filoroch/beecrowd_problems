var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Resolução nº1
// shift() => retorna o primeiro elemento do array
// const A = lines.shift();
// const B = lines.shift();

// Resolução nº2
const [A,B] = lines.map(Number);
console.log(A);
console.log(B);

const PROD = (A,B) => {return A * B} 

console.log(`PROD = ${PROD(A,B)}`);