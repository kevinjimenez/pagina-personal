import { ProyectoInterface } from "./proyecto.interface";

export interface ProyectosInterface {
  id: number;
  color: string;
  empresa: string;
  Proyectos: ProyectoInterface[];
}
