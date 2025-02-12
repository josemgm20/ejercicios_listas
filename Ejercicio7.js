/** Ejercicio 7: Fusionar Objetos con Claves Únicas

Enunciado:
Crea una función llamada fusionarObjetos que reciba dos objetos y los fusione en uno solo.

Si hay claves repetidas, el valor del segundo objeto debe sobrescribir al del primero.

Usa Object.keys() y for...in.

Ejemplo:

fusionarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 });
// Resultado esperado: { a: 1, b: 3, c: 4 } */

function fusionarObjetos(object1, object2) {
  let arrayKeys = [...Object.keys(object1), ...Object.keys(object2)];
  let arrayValues = [...Object.values(object1), ...Object.values(object2)];

  const fusionado = {};

  for (let key in arrayKeys) {
    fusionado[arrayKeys[key]] = arrayValues[key];
  }
  console.log(fusionado);

  return fusionado;
}

fusionarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 });
