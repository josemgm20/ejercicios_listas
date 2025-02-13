/**🔍 5. Encontrar la Primera Palabra Larga

Tienes una lista de palabras:

const words = ['cat', 'elephant', 'dog', 'giraffe', 'lion'];


Instrucciones:
Encuentra la primera palabra que tenga más de 5 letras utilizando find.

Resultado esperado: 'elephant' */

const words = ["cat", "elephant", "dog", "giraffe", "lion"];

console.log(words.find((palabra) => palabra.length > 5));
