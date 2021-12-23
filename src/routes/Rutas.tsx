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
          <Route exact path="/" component={SobreMi} />
          <Route exact path="/experiencia" component={Experiencia} />
          <Route exact path="/proyectos" component={Proyectos} />
          <Route exact path="/habilidades" component={Habilidades} />
          <Route exact path="/educacion" component={Educacion} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
