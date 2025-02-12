/**Ejercicio 10: Contar Caracteres en un Texto

Enunciado:
Crea una función flecha llamada contarCaracteres que reciba un texto (string) y devuelva un objeto que indique cuántas veces aparece cada carácter.

Usa un bucle for...in para recorrer el string como si fuera un array de caracteres (los strings en JS permiten esto).

Ejemplo:

contarCaracteres("programacion");
// Resultado esperado: { p: 1, r: 2, o: 2, g: 1, a: 2, m: 1, c: 1, i: 1, n: 1 }
 */

const contarCaracteres = (palabra) => {
  let numCaracteres = {};
  let listaPalabra = palabra.split("");
  for (caracter in listaPalabra) {
    numCaracteres[listaPalabra[caracter]] =
      (numCaracteres[listaPalabra[caracter]] || 0) + 1;
  }

  console.log(numCaracteres);
  return numCaracteres;
};

contarCaracteres("programacion");
