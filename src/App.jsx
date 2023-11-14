import { useState } from "react";
import Card from "./Card";
import hamburguesasData from "./Data";
function App() {
  const [totalPrecioEnCarrito, setTotalPrecioEnCarrito] = useState(0);
  const [hamburguesasSeleccionadas, setHamburguesasSeleccionadas] = useState(
    []
  );
  const [cantidadTotalHamburguesas, setCantidadTotalHamburguesas] = useState(0);

  const agregarAlCarrito = (precio, nombre) => {
    // Verificar si el artículo ya está en el carrito
    const itemIndex = hamburguesasSeleccionadas.findIndex(
      (item) => item.nombre === nombre
    );

    if (itemIndex !== -1) {
      // Si el artículo ya está en el carrito, actualiza la cantidad y el precio
      const nuevasHamburguesas = [...hamburguesasSeleccionadas];
      nuevasHamburguesas[itemIndex].cantidad++;
      nuevasHamburguesas[itemIndex].subtotal =
        nuevasHamburguesas[itemIndex].cantidad * precio;

      setHamburguesasSeleccionadas(nuevasHamburguesas);
    } else {
      // Si el artículo no está en el carrito, agrégalo como un nuevo elemento
      setHamburguesasSeleccionadas([
        ...hamburguesasSeleccionadas,
        { nombre, precio, cantidad: 1, subtotal: precio },
      ]);
    }

    // Sumar el precio de la hamburguesa al precio total
    setTotalPrecioEnCarrito(totalPrecioEnCarrito + precio);
    setCantidadTotalHamburguesas(cantidadTotalHamburguesas + 1);
  };

  const eliminarHamburguesa = (index) => {
    // Obtener la hamburguesa a eliminar
    const hamburguesaAEliminar = hamburguesasSeleccionadas[index];

    // Restar el precio de la hamburguesa eliminada del precio total
    setTotalPrecioEnCarrito(
      totalPrecioEnCarrito - hamburguesaAEliminar.subtotal
    );

    // Eliminar la hamburguesa del carrito
    const nuevasHamburguesas = [...hamburguesasSeleccionadas];
    nuevasHamburguesas.splice(index, 1);
    setHamburguesasSeleccionadas(nuevasHamburguesas);
  };

  const deleteCarrito = () => {
    // Restablecer el carrito y el precio total
    setTotalPrecioEnCarrito(0);
    setHamburguesasSeleccionadas([]);
  };

  const realizarPedido = () => {
    let mensaje = "¡Hola! Quiero realizar el siguiente pedido:\n\n";
    console.log(hamburguesasSeleccionadas);
    if (hamburguesasSeleccionadas.length == 0) {
      alert("Su carrito esta vacio");
    } else {
      hamburguesasSeleccionadas.forEach((item) => {
        mensaje += `${item.nombre} - $${item.precio} - Cantidad: ${item.cantidad}\n`;
      });

      mensaje += `\nPrecio total: $${totalPrecioEnCarrito}`;

      const numeroWhatsapp = "3755390616"; // Reemplaza con tu número de WhatsApp
      const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
        mensaje
      )}`;
      window.open(urlWhatsapp);
    }
  };
  return (
    <>
      <nav className="navbar nav-color">
        <div className="container-fluid d-flex justify-content-center ">
          <div className="navbar-brand m-0 p-0 text-black text-center d-flex logo align-items-center fs-2 gap-3">
            <img
              src="./img/cl1.png"
              alt="Logo"
              width={60}
              className=" align-text-center rounded-circle "
            />
            Clandestinos
            <br /> Burgers
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center  sticky-top nav-color">
        <a href="#" className="nav-buttom btn">
          Inicio
        </a>
        <a className="nav-buttom btn" href="#about">
          Sobre Nosotros
        </a>
        <a href="#compra" className="nav-buttom  btn">
          Comprar
        </a>
      </div>
      <main className="vh-50 text-light bg-main  d-flex flex-column justify-content-center align-items-center">
        <h1 className="font-clandestino text-black display-1 text-center m-0">
          Clandestinos Burgers
        </h1>

        <div className="d-flex justify-content-center align-items-center pt-3 relative">
          <button className="btn-main">Haz tu pedido!</button>
        </div>
      </main>
      <section
        id="compra"
        className="d-flex flex-column  align-items-center bg-section "
      >
        <article className="text-center d-flex flex-column">
          <h2 className="display-3 font-clandestino text-center font-unica p-2">
            Hamburguesas
          </h2>
          <figure className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:justify-items-center w-6/6 d-flex flex-column gap-3 pb-20 pt-1">
            {hamburguesasData.map((data) => (
              <div key={data.nombre}>
                <Card
                  img={data.imagen}
                  name={data.nombre}
                  price={data.precio}
                  agregarAlCarrito={() =>
                    agregarAlCarrito(data.precio, data.nombre)
                  }
                ></Card>
              </div>
            ))}
          </figure>
        </article>
      </section>
      <section
        id="about"
        className="d-flex flex-column justify-content-center align-items-center bg-article "
      >
        <h2 className="font-clandestino text-black display-1 text-center mb-2 ">
          Sobre Nosotros
        </h2>
        <article>
          <ul className="fs-1 list-group text-center vh-50 d-flex justify-content-center align-items-center">
            <li className="list-group">San Vicente Misiones</li>
            <li className="list-group">🙌🏻todos los dias🧑🏻‍🍳</li>
            <li className="list-group"> 19:00hs a 00:00hs</li>
            <li className="list-group">Av. Constitución 706📍 </li>
            <li className="list-group">📲 Wpp: 3755796856</li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default App;
