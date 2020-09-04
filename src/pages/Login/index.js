import React from "react";
import Logo_Netflix from "../../components/assetsLogin/Logo_Netflix.PNG";
import Logo_Netflix2 from "../../components/assetsLogin/Logo_Netflix2.PNG";

import { Link } from "react-router-dom";
import "./index.css";

function Login() {
  return (
    <li className="Login">
      <h1>Quem esta assitindo a EnemFlix ?</h1>
      <Link to="/studant" className="Logo_Netflix">
        <img src={Logo_Netflix} />
        <p>Estudante</p>
      </Link>

      <Link to="/adm" className="Logo_Netflix2">
        <img src={Logo_Netflix2} />
        <p>Administrador</p>
      </Link>
    </li>
  );
}

export default Login;
