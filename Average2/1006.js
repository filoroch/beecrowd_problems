var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A,B,C] = lines.map(Number);

// Treinando declarar varias variaveis na mesma linha
const p1 = 2.0, p2 = 3.0, p3 = 5.0;

const MP = (v1, v2, v3) => {
    const pv1 = p1 * v1;
    const pv2 = p2 * v2;
    const pv3 = p3 * v3;

    const pn = p1 + p2 + p3;
    
    return ((pv1 + pv2 + pv3) / pn).toFixed(1);
}

console.log(`MEDIA = ${MP(A, B, C)}`)