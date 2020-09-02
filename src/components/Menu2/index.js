import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";

import { Link } from "react-router-dom";

function Menu2() {
  return (
    <nav className="Menu">
      <Link to="/studant">
        <img className="Logo" src={Logo} />
      </Link>
    </nav>
  );
}

export default Menu2;
