import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';
import Button from '../Button';
import {Link} from 'react-router-dom';

function Menu (){
    return(
    <nav className="Menu">
          <Link to="/">
            <img class="Logo" src={Logo} />
        </Link>

        <Button as={Link} className="ButtonLink"to="/Cadastro/Video/index.js">
            Mais Matérias 
        </Button>
    </nav>
 );
}

export default Menu;