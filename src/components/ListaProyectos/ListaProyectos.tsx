import { Fieldset } from "primereact/fieldset";
import { PROYECTOS } from "../../utils/contantes/data-proyectos";
import { ProyectoInterface } from "../../utils/interfaces/proyecto.interface";
import { ProyectosInterface } from "../../utils/interfaces/proyectos.interface";
import { Proyecto } from "../Proyecto/Proyecto";

export const ListaProyectos = () => {
  return (
    <>
      {PROYECTOS.map((item: ProyectosInterface) => (
        <Fieldset legend={item.empresa} key={item.id} toggleable>
          <div className="row">
            {item.Proyectos.map((proyecto: ProyectoInterface) => (
              <div className="col-sm-4  animate__animated animate__lightSpeedInLeft">
                <Proyecto
                  {...proyecto}
                  empresa={item.empresa}
                  color={item.color}
                  key={proyecto.id}
                />
              </div>
            ))}
          </div>
        </Fieldset>
      ))}
    </>
  );
};
