/**Ejercicio 1: Suma Condicional de Números

Enunciado:
Crea una función llamada sumaCondicional que reciba un array de números y sume solo aquellos que sean mayores que 10 y múltiplos de 3.

Usa forEach() para recorrer el array.

Devuelve la suma final.

Ejemplo:

sumaCondicional([5, 12, 18, 7, 21, 30]);  // Resultado esperado: 81 (12 + 18 + 21 + 30) */

function sumaCondicional(array) {
  let suma = 0;

  array.forEach((element) => {
    if (element > 10 && element % 3 === 0) suma += element;
  });
  console.log(suma);
  return suma;
}

sumaCondicional([5, 12, 18, 7, 21, 30]);
