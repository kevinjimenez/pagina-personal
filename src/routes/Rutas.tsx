import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Educacion } from "../pages/Educacion";
import { Experiencia } from "../pages/Experiencia";
import { Habilidades } from "../pages/Habilidades";
import { NotFound } from "../pages/NotFound";
import { Proyectos } from "../pages/Proyectos";
import { SobreMi } from "../pages/SobreMi";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/pagina-personal" component={SobreMi} />
          <Route exact path="/pagina-personal/experiencia" component={Experiencia} />
          <Route exact path="/pagina-personal/proyectos" component={Proyectos} />
          <Route exact path="/pagina-personal/habilidades" component={Habilidades} />
          <Route exact path="/pagina-personal/educacion" component={Educacion} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
