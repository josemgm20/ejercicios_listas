/**Ejercicio 3: Filtrar Palabras Largas

Enunciado:
Crea una función flecha llamada filtrarPalabras que reciba un array de palabras y devuelva un nuevo array solo con aquellas que tienen más de 5 letras.

Usa forEach() para el recorrido.

Ejemplo:

contarTipos(["elefante", "águila", "cielo", "oso", "universo"]);
// Resultado esperado: ["elefante", "águila", "universo"]
 */

function contarTipos(array) {
  let listaPalabrasLargas = [];

  array.forEach((element) => {
    let palabra = element.split("");
    if (palabra.length > 5) listaPalabrasLargas.push(element);
  });

  console.log(listaPalabrasLargas);
  return listaPalabrasLargas;
}

contarTipos(["elefante", "águila", "cielo", "oso", "universo"]);
