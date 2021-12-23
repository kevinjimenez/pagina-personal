import { Divider } from "antd";
import { CONTACTOS } from "../../utils/contantes/data-contacto";
import { REDES_SOCIALES } from "../../utils/contantes/data-red-social";
import { REPOSITORIOS } from "../../utils/contantes/data-repositorio";
import { ContactoInterface } from "../../utils/interfaces/contacto.interface";
import { A, ImgIcon } from "./styles";

export const Contacto = () => {
  const soloContactos = () => {
    return CONTACTOS.map((item: ContactoInterface) => (
      <div className="col-sm-6 animate__animated animate__jello">
        <ImgIcon src={item.icon} alt={item.nombre} />{" "}
        <span>{item.descripcion}</span>
      </div>
    ));
  };

  const soloRedesSociales = () => {
    return REDES_SOCIALES.map((item: ContactoInterface) => (
      <div className="col-sm-6 animate__animated animate__jello">
        <A href={item.link} target='_blank'>
          <ImgIcon src={item.icon} alt={item.nombre} />{" "}
          <span>{item.nombre}</span>
        </A>{" "}
      </div>
    ));
  };

  const soloRepositorios = () => {
    return REPOSITORIOS.map((item: ContactoInterface) => (
      <div className="col-sm-6 animate__animated animate__jello">
        <A href={item.link} target='_blank'>
          <ImgIcon src={item.icon} alt={item.nombre} />{" "}
          <span>{item.nombre}</span>
        </A>
      </div>
    ));
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <Divider>Contacto</Divider>
        </div>
        {soloContactos()}
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Divider>Redes sociales</Divider>
        </div>
        {soloRedesSociales()}
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Divider>Respositorios</Divider>
        </div>
        {soloRepositorios()}
      </div>
    </>
  );
};
