import { LineaTiempoInterface } from "./linea-tiempo.interface";

export interface CargoInterface extends LineaTiempoInterface {
  id: number;
  cargo: string;
  empresa: string;
  funciones: string[];
  icon: string;
  inicio: string;
  fin: string;
  presente: boolean
}
