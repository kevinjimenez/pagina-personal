import { Card, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";
import { ConcursoInterface } from "../../utils/interfaces/concurso.interface";
export const Concurso = ({
  nombre,
  descripcion,
  icon,
  empresa,
  fecha,
}: ConcursoInterface) => {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: 10, paddingBottom: 10 }}
      >
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          }
        >
          <h6>{empresa}</h6>
          <Meta
            avatar={<Avatar src={icon} />}
            title={nombre}
            description={descripcion}
          />
        </Card>
      </div>
    </>
  );
};
