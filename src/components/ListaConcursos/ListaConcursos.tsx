import { CONCURSO } from "../../utils/contantes/data-concursos";
import { ConcursoInterface } from "../../utils/interfaces/concurso.interface";
import { Concurso } from "../Concurso/Concurso";

export const ListaConcurso = () => {
  return (
    <>
      {CONCURSO.map((consurso: ConcursoInterface) => (
        <div className="col-sm-4 ">
          <Concurso {...consurso}/>
        </div>
      ))}
    </>
  );
};
