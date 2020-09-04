import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./style.css";
import Logo_Netflix from "../assetsLogin/Logo_Netflix.PNG";

import ButtonNetflix from "../ButtonNetflix";
import { Link } from "react-router-dom";

function Menu2() {
  return (
    <nav className="Menu2">
      <Link to="/">
        <img className="Logo" src={Logo} />
      </Link>

      <ButtonNetflix as={Link} className="ButtonLinkNet" to="/">
        <img className="ButtonNetflix" src={Logo_Netflix} />
      </ButtonNetflix>
    </nav>
  );
}

export default Menu2;
