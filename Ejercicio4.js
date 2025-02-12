/**Ejercicio 4: Contar Tipos de Datos en un Array

Enunciado:
Crea una función llamada contarTipos que reciba un array con diferentes tipos de datos (números, strings, booleanos, etc.) y devuelva un objeto que indique cuántos de cada tipo hay.

Usa typeof y forEach().

Ejemplo:

contarTipos([1, "hola", true, 42, false, "mundo", null, undefined]);
// Resultado esperado: { number: 2, string: 2, boolean: 2, object: 1, undefined: 1 } */

function contarTipos(array) {
  let listaTipos = {};

  array.forEach((element) => {
    let tipo = typeof element;

    listaTipos[tipo] = (listaTipos[tipo] || 0) + 1;
  });
  console.log(listaTipos);
  return listaTipos;
}

contarTipos([1, "hola", true, 42, false, "mundo", null, undefined]);
