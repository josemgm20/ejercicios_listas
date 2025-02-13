/**🥇 14. Encontrar el Segundo Número Más Grande

Tienes este array de números:

const numbers = [45, 67, 12, 89, 34, 22];


Instrucciones:
1️⃣ Ordena los números de mayor a menor usando sort.
2️⃣ Elimina el número más grande con shift o pop.
3️⃣ Devuelve el segundo número más grande.

Resultado esperado: 67 */

const numbers = [45, 67, 12, 89, 34, 22];

const numMax = numbers.sort().reverse();

numMax.shift();

console.log(numMax[0]);
