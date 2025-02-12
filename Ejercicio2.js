/**Ejercicio 2: Invertir Claves y Valores de un Objeto

Enunciado:
Crea una función llamada invertirObjeto que reciba un objeto y devuelva uno nuevo donde las claves sean los valores y los valores sean las claves.

Usa Object.keys() y un bucle for...in para recorrer el objeto.

Ejemplo:

invertirObjeto({ a: "uno", b: "dos", c: "tres" });
// Resultado esperado: { uno: "a", dos: "b", tres: "c" } */

function invertirObjeto(objeto) {
  let objetoInvertido = {};

  for (let key in objeto) {
    objetoInvertido[objeto[key]] = key;
  }
  console.log(objetoInvertido);
  return objetoInvertido;
}

invertirObjeto({ a: "uno", b: "dos", c: "tres" });
