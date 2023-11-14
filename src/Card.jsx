const Card = ({ img, name, price, agregarAlCarrito }) => {
  return (
    <section className="bg-black d-flex aling-items-center justify-content-between p-2 md:p-0   md:flex-col md:w-56 rounded-4  p-2 shadow-lg shadow-black ">
      <img
        src={img}
        width={100}
        className=" rounded-4 md:rounded-t-lg md:rounded-b-none object-fit-cover"
        alt=""
      />
      <article className="md:w-56 flex flex-col text-white text-end gap-2 p-2">
        <div className="d-flex flex-column md:items-end align-items-end">
          <h3 className="text-end">{name}</h3>
          <span className="text-end">$ {price}</span>
        </div>
        <button
          onClick={agregarAlCarrito}
          className="btn-main text-white rounded-full p-1  text-sm shadow-md"
        >
          Agregar al carrito
        </button>
      </article>
    </section>
  );
};

export default Card;
