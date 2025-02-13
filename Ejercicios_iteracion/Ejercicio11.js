/** 11. Ordenar Nombres por Longitud

Trabaja con el siguiente array de nombres:

const names = ['Pin', 'Coche', 'Canarias', 'Astronauta'];


Instrucciones:
Ordena los nombres de más corto a más largo utilizando y length.
 */

const ordenLongitud = (array) => {
  const listaOrdenada = array.sort((a, b) => a.length - b.length);

  console.log(listaOrdenada);

  return listaOrdenada;
};

const names = ["Canarias", "Pin", "Coche", "Astronauta"];
ordenLongitud(names);
