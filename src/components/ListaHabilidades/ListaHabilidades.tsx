import { HABILIDADES } from "../../utils/contantes/data-habilidades";
import { HabilidadInterface } from "../../utils/interfaces/habilidad.interface";
import { Habilidad } from "../Habilidad/Habilidad";

export const ListaHabilidades = () => {
  return (
    <>
      {HABILIDADES.map((item: HabilidadInterface) => (
        <div
          className="col-sm-4 text-center animate__animated animate__flipInX"
          style={{ padding: "1rem 0.5rem 0.5rem 1rem" }}
        >
          <Habilidad {...item} key={item.nombre} />
        </div>
      ))}
    </>
  );
};
