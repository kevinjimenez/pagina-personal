import React from "react";
import { Dialog } from "primereact/dialog";
import { PublicacionInterface } from "../../utils/interfaces/publicacion.interface";

export const ModalPublicacion = (props: PublicacionInterface) => {
  const [displayResponsive, setDisplayResponsive] = React.useState(false);

  const onClick = () => {
    setDisplayResponsive(true);
  };

  const onHide = () => {
    setDisplayResponsive(false);
  };

  const renderFooter = () => {
    return (
      <div>
        <button className="btn btn-danger" onClick={() => onHide()}>
          Cancelar
        </button>
        <button className="btn btn-success" onClick={() => onHide()} autoFocus>
          Aceptar
        </button>
      </div>
    );
  };

  return (
    <>
      <button className="btn btn-primary" onClick={onClick}>
        Visualizar
      </button>
      <Dialog
        header={props.nombre}
        visible={displayResponsive}
        onHide={onHide}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "50vw" }}
        footer={renderFooter}
      >
        <h6>Resumen:</h6>
        <p style={{textAlign: 'justify'}}>{props.resumen}</p>
        <p>
        <a href={props.link} target='_blank' rel="noreferrer">
          Link externo
        </a>
        </p>
        <h6>Cita:</h6>
        <p style={{fontSize: '0.7rem', textAlign: 'justify'}}>{props.cita}</p>
        <h6>Fecha publicacion:</h6>
        <p>{props.fecha}</p>
      </Dialog>
    </>
  );
};
