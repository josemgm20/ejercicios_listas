/**2. Ordenar y Eliminar Elementos

Tienes un array de puntajes:

const scores = [56, 89, 72, 45, 99, 38, 65];


Instrucciones:
1️⃣ Ordena el array de mayor a menor con sort.
2️⃣ Elimina el puntaje más alto usando pop y el más bajo con shift.

Resultado esperado: [89, 72, 65, 56, 45] */

const ordenarEliminar = (array) => {
  let arrayOrdenado = array.sort().reverse();

  console.log(arrayOrdenado);

  arrayOrdenado.pop();
  arrayOrdenado.shift();

  console.log(arrayOrdenado);
};

ordenarEliminar([56, 89, 72, 45, 99, 38, 65]);
