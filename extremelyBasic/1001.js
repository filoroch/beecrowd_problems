/**
 * Para executar os programas em JS no terminal, basta ter o Node.JS instalado e executar node {nomearquivo.js}
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/** Leia duas variaveis chamadas A e B e some esses dos valores mostrando o resultado na variavel X. Imprima X junto com o resultado, do contrario dara erro de apresentação */

// Estou atribuindo as duas primeiras posições do array para as variaveis A e B respectivamente
const [A,B] = lines;
const sum = (A,B) => {return X = A + B};

console.log('X = ' , sum(A,B))