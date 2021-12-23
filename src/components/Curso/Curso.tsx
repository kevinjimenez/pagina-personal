import { Card } from "antd";
import { CursoInterface } from "../../utils/interfaces/curso.interface";

export const Curso = (props: CursoInterface) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Card
          size="small"
          title={props.nombre}
          style={{ width: 450, padding: "5rem, 0, 0, 5rem" }}
        >
          <p>Porcentaje: {props.porcentaje} %</p>
        </Card>
      </div>
    </>
  );
};
