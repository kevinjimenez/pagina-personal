import { Image, H1Nombre, H4Descripcion } from "./styles";
import foto from '../../assets/images/foto.jpg'
const estilo = {
  padding: "2.5rem",
};

export const Foto = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-5 text-center animate__animated animate__slideInLeft">
          <Image
            src={foto}
            alt="foto kevin"
          />
        </div>
        <div className="col-sm-5" style={estilo}>
          <H1Nombre className="animate__animated animate__slideInRight">Kevin O. Jiménez S.</H1Nombre>
          <H4Descripcion className="animate__animated animate__slideInRight">
            Software engineer
          </H4Descripcion>
        </div>
        <div className="col-sm-1" />
      </div>
    </>
  );
};
