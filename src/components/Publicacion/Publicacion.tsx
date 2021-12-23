import classNames from "classnames";
import React from "react";
import { PUBLICACIONES } from "../../utils/contantes/data-publicaciones";
import { PublicacionInterface } from "../../utils/interfaces/publicacion.interface";
import { ModalPublicacion } from "./ModalPublicacion";

export const Publicacion = (props: PublicacionInterface) => {
  const gridStyle = classNames({
    "col-sm-4 text-center": PUBLICACIONES.length >= 2,
    "col-sm-12 text-center": PUBLICACIONES.length === 1,
  });
  return (
    <>
      <div className={gridStyle}>
        <h4>{props.nombre}</h4>
        <h6>Autores: {props.autores}</h6>
        <h6>Publisher: {props.publisher}</h6>
        <h6>Published in: {props.published}</h6>
        <ModalPublicacion {...props} />
      </div>
    </>
  );
};
