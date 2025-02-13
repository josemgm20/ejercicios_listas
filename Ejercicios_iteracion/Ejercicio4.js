/**🔄 4. Invertir y Unir Nombres

Dado este array de nombres:

const names = ['Alice', 'Bob', 'Charlie', 'David'];


Instrucciones:
1️⃣ Invierte el orden de los nombres con reverse.
2️⃣ Únelos en una sola cadena separada por guiones (-) usando join.

Resultado esperado: 'David-Charlie-Bob-Alice'*/

const names = ["Alice", "Bob", "Charlie", "David"];

const invertirUnir = (array) => {
  console.log(array.reverse().join("-"));
};

invertirUnir(names);
