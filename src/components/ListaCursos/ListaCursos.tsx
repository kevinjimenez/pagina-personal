import { CursosInterfaces } from "../../utils/interfaces/cursos.interface";
import { Curso } from "../Curso/Curso";
import { ImgIcon } from "./styles";

export const ListaCursos = ({ cursos, nombre, icon }: CursosInterfaces) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 text-center animate__animated animate__bounceIn">
          <p>
            <h4>{nombre}</h4> <ImgIcon src={icon} alt="" />
          </p>
        </div>
      </div>

      <div className="row">
        {cursos.map((item: any) => (
          <div className="col-sm-4 animate__animated animate__bounce">
            <Curso key={item.nombre} {...item} />
          </div>
        ))}
      </div>
    </>
  );
};
