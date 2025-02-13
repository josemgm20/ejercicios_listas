/**🔍 15. Verificar Inclusión de Subcadenas en Frases

Trabaja con el siguiente array de frases:

const phrases = ['I love JavaScript', 'Coding is great', 'Java is cool', 'I prefer Python'];


Instrucciones:
1️⃣ Verifica si cada frase incluye la palabra 'Java' usando includes.
2️⃣ Devuelve un nuevo array de booleanos usando map.

Resultado esperado: [true, false, true, false]

🎯 ¿Listo para el desafío?
Resuelve estos ejercicios y mejora tus habilidades de JavaScript. 💻⚡
Si te gustó, ¡comparte o comenta cuál fue tu favorito! 🚀 */

const phrases = [
  "I love JavaScript",
  "Coding is great",
  "Java is cool",
  "I prefer Python",
];

console.log(phrases.map((phrase) => phrase.includes("Java")));
