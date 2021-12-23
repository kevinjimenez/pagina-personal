import ReactDOM from 'react-dom';
import './index.scss';
import { Rutas } from './routes/Rutas';
/* solo bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/* solo primeng */
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
/* ngZorro */
import 'antd/dist/antd.css'
import 'animate.css';


ReactDOM.render(
  <>
    <Rutas />
  </>,
  document.getElementById('root')
);

