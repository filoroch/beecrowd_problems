/**
 * Para executar os programas em JS no terminal, basta ter o Node.JS instalado e executar node {nomearquivo.js}
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log("Hello World!")