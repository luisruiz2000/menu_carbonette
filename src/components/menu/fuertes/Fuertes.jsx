import "./Fuertes.css";

import Plato from "../../ui/Plato/Plato";
import punta_anca from "../../../assets/imgs/fuertes_imgs/punta_anca.png";
import churrasco from "../../../assets/imgs/fuertes_imgs/churrasco.png";
import new_york_steak from "../../../assets/imgs/fuertes_imgs/new_york_steak.png";
import costillas_vikingas from "../../../assets/imgs/fuertes_imgs/bg_fuertes.png";
import bondiola_ahumada from "../../../assets/imgs/fuertes_imgs/bondiola_ahumada.png";
import solomito_cerdo from "../../../assets/imgs/fuertes_imgs/solomito_cerdo.png";

const Fuertes = () => {
  return (
    <div className="fuertes bg_imge_section">
      <h2 className="title">FUERTES</h2>

      <p className="subtitle">RES</p>
      <div className="fuertes_platos">
        <Plato
          position="left"
          plato_img={punta_anca}
          plato_nombre="PUNTA DE ANCA"
          precio="$54.000"
          plato_descripcion="Punta de Anca de res, perfectamente
            sellada y marcada a la parrilla. Acompañada de Ensalada de Temporada, Arepa y el Acompañante
            de su elección."
        />

        <Plato
          position="right"
          plato_img={churrasco}
          plato_nombre="CHURRASCO"
          precio="$54.000"
          plato_descripcion="Tierno Churrasco de res, un corte clásico
            y delicioso. Servido con Ensalada de
            Temporada, Arepa y el Acompañante de
            su elección."
        />

        <Plato
          position="left"
          plato_img={new_york_steak}
          plato_nombre="NEW YORK STEAK"
          precio="$62.500"
          plato_descripcion="Corte Premium de res Importado, jugoso
            y con un marmoleo perfecto.
            Acompañado de nuestra fresca
            Ensalada de Temporada, Arepa y el
            Acompañante de su elección."
        />

        <p className="subtitle">CERDO</p>
        <Plato
          position="right"
          plato_img={costillas_vikingas}
          plato_nombre="COSTILLAS VIKINGAS"
          precio="$58.500"
          plato_descripcion="Costilla Ahumada bañada en salsa BBQ,
            con una textura que se derrite en la boca.
            Servida con Ensalada de Temporada,
            Arepa y el Acompañante de su elección."
        />

         <Plato
          position="left"
          plato_img={bondiola_ahumada}
          plato_nombre="BONDIOLA AHUMADA"
          precio="$40.000"
          plato_descripcion="Bondiola Ahumada al Barril, tierna y con
            notas ahumadas intensas. Servida con
            Ensalada de Temporada, Arepa y el
            Acompañante de su elección."
        />


         <Plato
          position="right"
          plato_img={solomito_cerdo}
          plato_nombre="SOLOMITO DE CERDO"
          precio="$36.000"
          plato_descripcion="Solomito de Cerdo jugoso, acompañado
            de Ensalada de Temporada, Arepa y el
            Acompañante de su elección"
        />
      </div>
    </div>
  );
};

export default Fuertes;
