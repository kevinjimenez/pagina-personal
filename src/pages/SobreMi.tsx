import { Contacto } from "../components/Contacto/Contacto";
import { Descripcion } from "../components/Descripcion/Descripcion";
import { Foto } from "../components/Foto/Foto";

export const SobreMi = () => {
  return (
    <>
      <div className="container">
        <Foto />
        <div className="row">
          <div className="col-sm-6">
            <Descripcion />
          </div>
          <div className="col-sm-6">
            <Contacto />
          </div>
        </div>
      </div>
    </>
  );
};
