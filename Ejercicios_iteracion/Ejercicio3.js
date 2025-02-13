/**🍎 3. Añadir y Eliminar Elementos de un Array

Trabaja con el siguiente array de frutas:

const fruits = ['apple', 'banana', 'cherry'];


Instrucciones:
1️⃣ Agrega 'grape' al final usando push y 'mango' al principio usando unshift.
2️⃣ Luego elimina el primer y último elemento usando shift y pop.

Resultado esperado: ['banana', 'cherry'] */

const fruits = ["apple", "banana", "cherry"];
const frutas = (array) => {
  fruits.push("grape");
  fruits.unshift("mango");

  console.log(fruits);

  fruits.pop();
  fruits.shift();

  console.log(fruits);
};

frutas(fruits);
