import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import Home from "./pages/Home/index.js";
import Start from "./pages/Start/index.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from "./pages/Cadastro/Video";
import CadastroCategoria from "./pages/Cadastro/Categoria";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/adm" component={Start} exact />
      <Route path="/" component={Home} exact />
      <Route path="/Cadastro/video" component={CadastroVideo} />
      <Route path="/Cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
