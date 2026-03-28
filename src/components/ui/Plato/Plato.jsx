import "./Platos.css";
const Plato = ({
  plato_img,
  plato_nombre,
  plato_descripcion,
  precio,
  position = "right",
}) => {
  const positionClass =
    position === "left" || position === "lefft" ? "left" : "right";

  return (
    <section className={`plato ${positionClass}`}>
      <div className="content_img_nombre">
        <img className="plato_img" src={plato_img} alt={plato_nombre} />
      </div>
      <div className="content_info_plato">
        <div className="plato_nombre_precio">
          <i className="plato_nombre">{plato_nombre} |</i>
          <i className="plato_precio">{precio}</i>
        </div>
        <p className="plato_descripcion">{plato_descripcion}</p>
      </div>
    </section>
  );
};

export default Plato;
