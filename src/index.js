import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";

import Administration from "./pages/Administration/index";
import Studant from "./pages/Studant/index";
import Selection from "./pages/Selection/index";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from "./pages/Cadastro/Video";
import CadastroCategoria from "./pages/Cadastro/Categoria";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/adm" component={Administration} exact />
      <Route path="/" component={Selection} exact />
      <Route path="/studant" component={Studant} exact />
      <Route path="/Cadastro/video" component={CadastroVideo} />
      <Route path="/Cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
