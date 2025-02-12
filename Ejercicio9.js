/** Ejercicio 9: Validar Propiedades en un Objeto

Enunciado:
Crea una función llamada validarPropiedades que reciba un objeto y un array de claves.

Devuelve true si el objeto contiene todas las claves del array, o false en caso contrario.

Usa Object.keys() y for...in.

Ejemplo:

validarPropiedades({ nombre: "Juan", edad: 30, ciudad: "Madrid" }, ["nombre", "edad"]);
// Resultado esperado: true

validarPropiedades({ nombre: "Juan", edad: 30 }, ["nombre", "ciudad"]);
// Resultado esperado: false
 */

function validarPropiedades(object, array) {
  let valido = true;
  array.forEach((element) => {
    if (!Object.keys(object).includes(element)) valido = false;
  });

  console.log(`Las propiedades del objeto son ${valido}`);

  return valido;
}

validarPropiedades({ nombre: "Juan", edad: 30, ciudad: "Madrid" }, [
  "nombre",
  "edad",
]);

validarPropiedades({ nombre: "Juan", edad: 30 }, ["nombre", "ciudad", "edad"]);
