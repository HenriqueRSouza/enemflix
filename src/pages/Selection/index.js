import React from "react";
import Logo_Netflix from "../../components/assetsLogin/Logo_Netflix.PNG";
import Logo_Netflix2 from "../../components/assetsLogin/Logo_Netflix2.PNG";
import Navegation from "../../components/Navegation";
import { Link } from "react-router-dom";
import "./index.css";

function Selection() {
  return (
    <li className="li_Selection">
      <Navegation />
      <h1>Quem esta assitindo a EnemFlix ?</h1>
      <Link to="/studant" className="Logo_Netflix">
        <img src={Logo_Netflix} alt="logo"/>
        <p>Estudante</p>
      </Link>

      <Link to="/adm" className="Logo_Netflix2">
        <img src={Logo_Netflix2} alt="logo"/>
        <p>Administrador</p>
      </Link>
    </li>
  );
}

export default Selection;
