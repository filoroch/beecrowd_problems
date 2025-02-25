var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A,B] = lines.map(Number);
const [weightA, weightB] = [3.5, 7.5];

// Maneira nº1
const MP = (A, B) => {return (weightA * A + weightB * B)/(weightA + weightB)}
console.log(`MEDIA = ${MP(A, B).toFixed(5)}`)


// Maneira nº2
const mediaPonderada = (A, B) => {
    // Multiplica os pesos pelos valores
    const resultA = A * weightA;
    const resultB = B * weightB;
    // Soma os pesos individuais
    const weights = weightA + weightB;
    // Divide os resultados
    const resultAB = (resultA + resultB) / weights;
    
    return resultAB.toFixed(5);
}

console.log(`MEDIA = ${mediaPonderada(A, B)}`)