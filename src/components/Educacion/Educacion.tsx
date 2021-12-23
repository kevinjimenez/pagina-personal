import { EducacionInterface } from "../../utils/interfaces/educacion.interface";
import { LineaTiempo } from "../LineaTiempo/LineaTiempo";

export const Educacion = ({
  educaciones,
}: {
  educaciones: EducacionInterface[];
}) => {
  return <LineaTiempo timelineData={educaciones} />;
};
