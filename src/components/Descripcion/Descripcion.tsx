import { saveAs } from "file-saver";
import { P } from "./styles";
import { Link } from "react-router-dom";

export const Descripcion = () => {
  const handlerClick = () => {
    saveAs(
      process.env.REACT_APP_CLIENT_URL + "/files/Currículum-Kevin-Jimenez.pdf",
      "CV_Kevin-Jimenez.pdf"
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12 animate__animated animate__pulse">
          <h5>Sobre mi</h5>
          <P>
            Soy Kevin Jiménez, graduado de la FALCULTAD DE INGENIERÍA DE
            SISTEMAS de la ESCUELA POLITÉCNICA NACIONAL, llevo alrededor de 4
            años desarrollando aplicaciones web y moviles, me defino como una
            persona honesta, responsable, amigable, me gusta mucho ayudar a la
            gente ademas, me apasiona la tecnología aprender e investigar nuevas
            tecnologías, mi especialidad es el desarrollo de frontend, backend y
            móvil, últimamente estoy aprendiendo machine learning y vision por
            computadora lo cual me gusta mucho, además, soy amantes de los
            videojuegos y el futbol.
          </P>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3" />
        <div className="col-sm-6">
          <div className="d-grid gap-2">
          <Link to="/files/Currículum-Kevin-Jimenez.pdf" target="_blank" download>Download</Link>
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handlerClick}
            >
              Descargar CV
            </button>
          </div>
        </div>
        <div className="col-sm-3" />
      </div>
    </>
  );
};
