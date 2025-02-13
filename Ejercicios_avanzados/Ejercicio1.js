/**1️⃣ Gestión de Inventario

Crea una función que gestione un inventario de productos. Debes poder:

Añadir nuevos productos (nombre, cantidad, precio).

Eliminar productos.

Filtrar productos por precio mayor a un valor dado.

Ordenar los productos por cantidad de mayor a menor.

Ejemplo de Datos:

const inventario = [
  { nombre: 'Laptop', cantidad: 10, precio: 800 },
  { nombre: 'Teclado', cantidad: 50, precio: 20 },
  { nombre: 'Ratón', cantidad: 30, precio: 10 }
];
 */

const inventario = [
  { nombre: "Laptop", cantidad: 10, precio: 800 },
  { nombre: "Teclado", cantidad: 50, precio: 20 },
  { nombre: "Ratón", cantidad: 30, precio: 10 },
];

function gestionInventario(gestion, producto) {
  const productoNuevo = {
    nombre: "",
    cantidad: 0,
    precio: 0,
  };

  switch (gestion) {
    case "crear":
      productoNuevo.nombre = producto[0];
      productoNuevo.cantidad = producto[1];
      productoNuevo.precio = producto[2];
      inventario.push(productoNuevo);
      console.log(inventario);
      break;
    case "eliminar":
      const inventarioEliminado = inventario.splice(producto, 1);
      console.log(inventarioEliminado);
      break;
    case "filtrar":
      const productosFiltrados = inventario.filter((p) => p.precio > producto);
      console.log(productosFiltrados);
      break;
  }
}

gestionInventario("crear", ["Microfono", 5, 50]);

gestionInventario("eliminar", 2);

gestionInventario("filtrar", 20);
