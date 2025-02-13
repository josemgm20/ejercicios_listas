/**📏 7. Filtrar Números Primos

Con el siguiente array:

const numbers = [2, 4, 5, 6, 7, 8, 9, 11, 13];


Instrucciones:
Filtra y devuelve solo los números primos usando filter. (Deberás implementar la lógica para identificar si un número es primo.)

Resultado esperado: [2, 5, 7, 11, 13] */

const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 11, 13];

const esPrimo = (num) => {
  let primo = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) primo = false;
  }

  return primo;
};

console.log(numbers.filter(esPrimo));
