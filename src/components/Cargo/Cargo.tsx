import classNames from "classnames";
import { CargoInterface } from "../../utils/interfaces/cargo.interface";

export const Cargo = (props: CargoInterface) => {
  const cardBorderStyle = classNames({
    "card border-secondary mb-3": !props.presente,
    "card border-success mb-3": props.presente,
  });
  const cardBodyStyle = classNames({
    "card-body text-secondary": !props.presente,
    "card-body text-success": props.presente,
  });
  return (
    <>
      <div className="col-sm-6">
        <div className={cardBorderStyle} style={{ maxWidth: "40rem" }}>
          <div className="card-header">
            {props.empresa} | {props.inicio} - {props.fin}
          </div>
          <div className={cardBodyStyle}>
            <h5 className="card-title">{props.cargo}</h5>
            <p className="card-text" style={{ textAlign: "justify" }}>
              <ul>
                {props.funciones.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
