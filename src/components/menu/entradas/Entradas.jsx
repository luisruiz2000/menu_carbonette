import "./Entradas.css";
import "../../../assets/css/index.css";
import Plato from "../../ui/Plato/Plato";
import entrada_patacones from "../../../assets/imgs/entradas_imgs/img_entrada_patacones.webp";
import entrada_emepanadas from "../../../assets/imgs/entradas_imgs/img_entrada_empanada.png";
import entrada_arepitas from "../../../assets/imgs/entradas_imgs/img_entrada_arepitas.png";
import entrada_deditos from "../../../assets/imgs/entradas_imgs/img_entrada_palitos_queso.png";

const Entradas = () => {
  return (
    <div className="entradas bg_imge_section">

        <h2 className="title">ENTRADAS</h2>

      <div className="entradas_platos">
        <Plato
          position="left"
          plato_img={entrada_patacones}
          plato_nombre="PATACONES"
          precio="$18.000"
          plato_descripcion="Patacones servidos con una inmersión
            de nuestro cremoso Guacamole y el
            tradicional Hogao casero."
        />
        <Plato
          position="right"
          plato_img={entrada_emepanadas}
          plato_nombre="AREPITAS CARBONETTO"
          precio="$22.500"
          plato_descripcion="Seis pequeñas joyas doradas con
          sabrosa Carne Molida, crujientes y
          acompañadas de intenso Ají de la
          Casa, perfectas para estimular el
          paladar."
        />
        <Plato
          position="left"
          plato_img={entrada_arepitas}
          plato_nombre="Patacones"
          precio="$14.000"
          plato_descripcion="Seis Arepitas Fritas, suaves por dentro
          y crujientes por fuera, ideales para
          acompañar con Guacamole fresco y
          Hogao tradicional."
        />

         <Plato
          position="right"
          plato_img={entrada_deditos}
          plato_nombre="DEDITOS DE QUESO"
          precio="$22.500"
          plato_descripcion="Seis Arepitas Fritas, suaves por dentro
          y crujientes por fuera, ideales para
          acompañar con Guacamole fresco y
          Hogao tradicional."
        />
      </div>
    </div>
  );
};

export default Entradas;
