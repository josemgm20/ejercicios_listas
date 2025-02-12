/**Ejercicio 8: Encontrar la Palabra Más Larga en un Array

Enunciado:
Crea una función flecha llamada palabraMasLarga que reciba un array de palabras y devuelva la que tenga más letras.

Usa forEach() para recorrer el array.

Ejemplo:

palabraMasLarga(["sol", "estrella", "planeta", "galaxia"]);
// Resultado esperado: "estrella" */

const palabraMasLarga = (array) => {
  let palabraMax = "";

  array.forEach((element) => {
    palabraMax = element.length > palabraMax.length ? element : palabraMax;
  });

  console.log(palabraMax);

  return palabraMax;
};

palabraMasLarga([
  "sol",
  "estrella",
  "planeta",
  "galaxia",
  "esternocleidomastoideo",
]);
