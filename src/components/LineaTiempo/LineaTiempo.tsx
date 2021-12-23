import { Card } from "primereact/card";
import { Timeline } from "primereact/timeline";
import { LineaTiempoInterface } from "../../utils/interfaces/linea-tiempo.interface";
import { MdDirectionsWalk } from "react-icons/md";
import "./TimelineDemo.scss";

export const LineaTiempo = ({ timelineData }: any) => {
  console.log(timelineData);

  const marcador = (item: LineaTiempoInterface) => {
    return (
      <span
        className="custom-marker p-shadow-2"
        style={{ backgroundColor: item.color }}
      >
        <MdDirectionsWalk />
      </span>
    );
  };

  const contenido = (item: LineaTiempoInterface) => {
    return (
      <Card title={item.status} subTitle={item.date}>
        <ul>
          {item.descripcion?.map((res, indice) => (
            <>
              <p key={indice}>{res}</p>              
            </>          
          ))}
        </ul>
        {item.image && (
          <img
            src={item.image}
            alt={item.image}
            width={80}
            className="p-shadow-2"
          />
        )}
      </Card>
    );
  };

  return (
    <div className="timeline-demo animate__animated animate__zoomInDown">
      <Timeline
        value={timelineData}
        align="alternate"
        className="customized-timeline"
        marker={marcador}
        content={contenido}
      />
    </div>
  );
};
