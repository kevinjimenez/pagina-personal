import { Divider } from "antd";
import { CURSOS } from "../../utils/contantes/data-cursos";
import { EDUCACIONES } from "../../utils/contantes/data-educacion";
import { PUBLICACIONES } from "../../utils/contantes/data-publicaciones";
import { PublicacionInterface } from "../../utils/interfaces/publicacion.interface";
import { Educacion } from "../Educacion/Educacion";
import { ListaConcurso } from "../ListaConcursos/ListaConcursos";
import { ListaCursos } from "../ListaCursos/ListaCursos";
import { Publicacion } from "../Publicacion/Publicacion";

export const ListaEducaciones = () => {
  return (
    <>
      <div className="container-fluid">
        <Divider>Academico</Divider>
        <Educacion educaciones={EDUCACIONES} />
        <Divider>Publicaciones</Divider>
        <div className="row">
          {PUBLICACIONES.map((pub: PublicacionInterface) => (
            <Publicacion {...pub} key={pub.id} />
          ))}
        </div>
        <Divider>Cursos</Divider>
        {CURSOS.map((item) => (
          <>
            <ListaCursos {...item}></ListaCursos>
          </>
        ))}
        <Divider>Concursos</Divider>
        <div className="row">
          <ListaConcurso />
        </div>
      </div>
    </>
  );
};
