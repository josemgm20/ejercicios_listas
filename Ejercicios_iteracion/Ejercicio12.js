/** ✅ 12. Manipular Lista de Tareas

Dado este array de tareas:

const tasks = ['Wash dishes', 'Do laundry', 'Clean room'];


Instrucciones:
1️⃣ Agrega 'Buy groceries' al final con push y 'Feed the cat' al principio con unshift.
2️⃣ Luego elimina la primera y última tarea usando shift y pop.

Resultado esperado: ['Do laundry', 'Clean room']*/

const tasks = ["Wash dishes", "Do laundry", "Clean room"];

tasks.push("Buy groceries");
tasks.unshift("Feed the cat");

console.log(tasks);

tasks.shift();
tasks.pop();

console.log(tasks);
