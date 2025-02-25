var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// cria uma nova lista passando cada valor como um Number
const [A,B] = lines.map(Number)

const SOMA = (A,B) => {return X = A + B};

console.log(`SOMA = ` + SOMA(A,B))