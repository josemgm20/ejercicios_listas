/**2️⃣ Análisis de Notas de Estudiantes

Tienes un array de objetos con el nombre de los estudiantes y sus calificaciones.

Filtra a los estudiantes que aprobaron (nota ≥ 6).

Calcula la nota media de toda la clase.

Ordena los estudiantes de mayor a menor calificación.

Ejemplo de Datos:

const estudiantes = [
  { nombre: 'Juan', nota: 8 },
  { nombre: 'Ana', nota: 5 },
  { nombre: 'Carlos', nota: 7 }
];
 */

const estudiantes = [
  { nombre: "Juan", nota: 8 },
  { nombre: "Ana", nota: 5 },
  { nombre: "Carlos", nota: 7 },
];

const aprobados = estudiantes.filter((estudiante) => estudiante.nota >= 6);

console.log(aprobados);

console.log(estudiantes.sort((a, b) => b.nota - a.nota));
