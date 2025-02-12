/**Ejercicio 5: Calcular Estadísticas de un Array Numérico

Enunciado:
Crea una función llamada calcularEstadisticas que reciba un array de números y devuelva un objeto con:

La suma total

El promedio

El número más grande

El número más pequeño

Usa funciones flecha para cálculos intermedios si lo necesitas.

Ejemplo:

calcularEstadisticas([4, 8, 15, 16, 23, 42]);
// Resultado esperado: { suma: 108, promedio: 18, max: 42, min: 4 } */

function calcularEstadisticas(array) {
  let estadisticas = {
    suma: 0,
    promedio: 0,
    max: -Infinity,
    min: Infinity,
  };

  array.forEach((element) => {
    //Sumamos todos los elementos
    estadisticas["suma"] = estadisticas.suma += element;

    // Hacemos la media
    estadisticas["promedio"] = estadisticas.suma / array.length;

    //Hacemos el maximo
    estadisticas["max"] =
      estadisticas["max"] < element ? element : estadisticas["max"];

    //Hacemos el minimo
    estadisticas["min"] =
      estadisticas["min"] > element ? element : estadisticas["min"];
  });

  console.log(estadisticas);

  return estadisticas;
}

calcularEstadisticas([4, 8, 15, 16, 23, 42]);
