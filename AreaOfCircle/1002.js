/**
 * A + n*R^^^2
 * PI = 3.14159
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const R = parseFloat(lines);
const n = 3.14159;

const areaOfCircle = (R,n) => {
    const r = Math.pow(R,2);
    return (A = n*r).toFixed(4);
}

console.log(`A=`+ areaOfCircle(R, n));