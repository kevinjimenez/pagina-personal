import classNames from "classnames";
import { HabilidadInterface } from "../../utils/interfaces/habilidad.interface";
import { ImageIcon } from "./styles";

export const Habilidad = (props: HabilidadInterface) => {
  const progressStyle = {
    width: `${props.porcentaje}%`,
  };
  const colorPorgressBar = classNames({
    "progress-bar progress-bar-striped progress-bar-animated bg-success":
      +props.porcentaje >= 80,
    "progress-bar progress-bar-striped progress-bar-animated bg-warning":
      +props.porcentaje < 80 && +props.porcentaje >= 50,
    "progress-bar progress-bar-striped progress-bar-animated bg-danger":
      +props.porcentaje < 50,
  });
  return (
    <>
      <ImageIcon src={props.icon} alt={props.nombre} />
      <div className="row">
        <div className="col-sm-4" />
        <div className="col-sm-4">
          <h3>{props.nombre}</h3>
        </div>
        <div className="col-sm-4" />
        <div className="col-sm-4" />
        <div className="col-sm-4">
          <div className="progress">
            <div
              className={colorPorgressBar}
              role="progressbar"
              style={progressStyle}
            >
              {props.porcentaje}%
            </div>
          </div>
        </div>
        <div className="col-sm-4" />
      </div>
    </>
  );
};
