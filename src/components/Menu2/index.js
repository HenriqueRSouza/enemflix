import React from "react";
import Logo from "../../assets/img/Logo.png";
import Logo_Netflix from "../assetsLogin/Logo_Netflix.PNG";
import "./Menu2.css";

import { Link } from "react-router-dom";

function Menu2() {
  return (
    <nav className="Menu">
      <Link to="/studant">
        <img className="Logo" src={Logo} />
      </Link>
      <Link to="/">
        <img className="ButtonLink2" src={Logo_Netflix} />
      </Link>
    </nav>
  );
}

export default Menu2;
