import {Link} from 'react-router-dom'
import foto from '../../assets/images/foto.jpg'
import { Image } from './styles';
export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Image
              src={foto}
              alt=""                            
              className="d-inline-block align-text-top animate__animated animate__heartBeat"
            />
            Kevin Jiménez
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/experiencia">
                Experiencia
              </Link>
              <Link className="nav-link" to="/proyectos">
                Proyectos
              </Link>
              <Link className="nav-link" to="/habilidades">
                Habilidades
              </Link>
              <Link className="nav-link" to="/educacion">
                Educación
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
