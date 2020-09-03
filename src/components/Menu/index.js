import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";

import Button from "../Button";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} />
      </Link>

      <Button as={Link} className="ButtonLink" to="/Cadastro/Video/index.js">
        Adicionar Materia
      </Button>
    </nav>
  );
}

export default Menu;
