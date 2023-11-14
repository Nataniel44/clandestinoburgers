const hamburguesasData = [
  {
    nombre: "Classic",
    precio: 1500,
    imagen: "../img-redux/classic.jpg",
    ingredientes:
      "Pan, medallon de carne, queso, jamón, huevo, tomate, lechuga, aderezos.",
  },
  {
    nombre: "Argenta",
    precio: 1800,
    imagen: "../img-redux/argen.jpg",
    ingredientes:
      "Pan, medallon de carne, huevo, queso provoleta, salsa criolla, aderezos.",
  },

  {
    nombre: "Rúcula y parmesano",
    precio: 1800,
    imagen: "../img-redux/rucula.jpg",
    ingredientes:
      "Pan, medallon de carne, queso, jamón, huevo, tomate, lechuga, aderezos.",
  },
  {
    nombre: "Chesse",
    precio: 1200,
    imagen: "../img-redux/cheese.jpg",
    ingredientes: "Pan, medallon de carne, queso cheddar.",
  },
  {
    nombre: "Top One",
    precio: 1800,
    imagen: "../img-redux/topone.jpg",
    ingredientes:
      "Pan, medallon de carne, queso, jamón, huevo, tomate, lechuga, aderezos.",
  },
  {
    nombre: "Hulk",
    precio: 2300,
    imagen: "../img-redux/hulk1.jpg",
    ingredientes:
      "Pan, medallon de carne, queso, jamón, huevo, tomate, lechuga, aderezos.",
  },
  // Agrega más hamburguesas aquí
];
function compararPorPrecio(a, b) {
  return a.precio - b.precio;
}

hamburguesasData.sort(compararPorPrecio);

export default hamburguesasData;
