/** 1. Duplicar y Filtrar Números Pares

Dado el siguiente array de números:

const numbers = [3, 7, 12, 5, 9, 20, 15];


Instrucciones:
1️⃣ Duplica cada número usando map.
2️⃣ Filtra solo los números pares que sean mayores que 20 usando filter.

Resultado esperado: [24, 40] */

const duplicarFiltrar = (array) => {
  const resultadoMap = array.map((num) => num * 2);

  const paresMayoresDe20 = resultadoMap.filter(
    (num) => num > 20 && num % 2 === 0
  );

  console.log(paresMayoresDe20);
  return paresMayoresDe20;
};

duplicarFiltrar([3, 7, 12, 5, 9, 20, 15]);
