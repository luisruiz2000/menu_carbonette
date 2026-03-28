import "./Casa.css";
import "../../../assets/css/index.css";
import Plato from "../../ui/Plato/Plato";

import ceviche_chicharron from "../../../assets/imgs/casa_imgs/ceviche_chicharron.png";
import molcajete from "../../../assets/imgs/casa_imgs/ceviche_molcajete.png";
import cesar_chicharron from "../../../assets/imgs/casa_imgs/cesar_chicharron.png";
import sandwich_bondiola from "../../../assets/imgs/casa_imgs/sandwich_bondiola.png";
import chorizo_artesanal from "../../../assets/imgs/casa_imgs/chorizo_artesanal.png";
import morcilla_envigadena from "../../../assets/imgs/casa_imgs/morcilla.png";
const Casa = () => {
  return (
    <div className="casa bg_imge_section">
      <h2 className="title">DE LA CASA</h2>
      <div className="casa_platos">
        <Plato
          position="left"
          plato_img={ceviche_chicharron}
          plato_nombre="CEVICHE DE CHICHARRÓN"
          precio="$30.000"
          plato_descripcion="Chicharrón de Cerdo Crujiente al Barril,
            servido con un vibrante Ceviche de Mango
            Cítrico. Acompañan esta fusión tropical:
            Patacones perfectamente dorados y un
            exquisito Guacamole Cremoso."
        />

        <Plato
          position="right"
          plato_img={molcajete}
          plato_nombre="MOLCAJETE"
          precio="$30.000"
          plato_descripcion="Un delicioso guacamole fresco sirve de
            base para una bondiola de cerdo
            caramelizada, bañada en su jugo. El plato
            se complementa con un exótico
            acevichado de mango y crujientes
            patacones."
        />

        <Plato
          position="left"
          plato_img={cesar_chicharron}
          plato_nombre="ENSALADA CÉSAR DE CHICHARRON"
          precio="$35.000"
          plato_descripcion="Selección de lechugas frescas, mezcladas
            con nuestra tradicional salsa César
            artesanal, croutones dorados y crocantes
            de chicharrón Carbonetto, finalizada con
            queso parmesano."
        />

        <Plato
          position="right"
          plato_img={sandwich_bondiola}
          plato_nombre="SANDWICH DE BONDIOLA"
          precio="$34.000"
          plato_descripcion="Sándwich de exquisita Bondiola Ahumada
            al Barril, bañada en una rica Salsa de
            Queso Cheddar, tocineta, lechuga fresca
            y tomate."
        />


        <Plato
          position="left"
          plato_img={chorizo_artesanal}
          plato_nombre="CHORIZO ARTESANAL"
          precio="$25.000"
          plato_descripcion="Una joya de nuestra parrilla. Un Chorizo
            de Cerdo Artesanal de sabor intenso y
            especiado, servido con una Papa al
            Vapor tierna y una clásica Arepa dorada."
        />


        <Plato
          position="right"
          plato_img={morcilla_envigadena}
          plato_nombre="MORCILLA ENVIGADEÑA"
          precio="$15.000"
          plato_descripcion="El sabor de la tradición. Nuestra
            inigualable Morcilla Envigadeña de
            receta secreta, acompañada de una
            tierna Papa y Arepa."
        />

      </div>
    </div>
  );
};

export default Casa;
