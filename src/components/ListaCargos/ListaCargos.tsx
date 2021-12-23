import { CARGOS } from "../../utils/contantes/data-cargos";
import { CargoInterface } from "../../utils/interfaces/cargo.interface";
import { LineaTiempo } from "../LineaTiempo/LineaTiempo";
export const ListaCargos = () => {
  const cargos = CARGOS.sort(
    (a: CargoInterface, b: CargoInterface) => b.id - a.id
  );
  return (
    <>
      <LineaTiempo timelineData={cargos} />
    </>
  );
};
