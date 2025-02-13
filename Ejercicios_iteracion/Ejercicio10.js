/**🔄 10. Invertir y Transformar Números

Tienes este array:

const nums = [1, 2, 3, 4, 5];


Instrucciones:
1️⃣ Invierte el array usando reverse.
2️⃣ Multiplica cada número por su índice usando map.

Resultado esperado: [0, 4, 6, 4, 0] */

const nums = [1, 2, 3, 4, 5];

const numsReverse = nums.reverse();

console.log(numsReverse.map((num) => num * numsReverse.indexOf(num)));
