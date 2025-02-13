/**✍️ 13. Filtrar y Unir Palabras

Dado el siguiente array:

const words = ['apple', 'banana', 'avocado', 'cherry', 'apricot'];


Instrucciones:
1️⃣ Filtra las palabras que comiencen con la letra 'a' usando filter.
2️⃣ Une las palabras resultantes en una sola cadena separada por comas usando join.

Resultado esperado: 'apple,avocado,apricot' */

const words = ["apple", "banana", "avocado", "cherry", "apricot"];

const aWords = words.filter((palabra) => palabra[0] == "a");

console.log(aWords.join());
