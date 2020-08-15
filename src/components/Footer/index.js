import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.google.com/">
        <img src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.google.com/search?biw=1366&bih=696&sxsrf=ALeKk03Z-DOCbCjrg6_3n52N6qjQM-7zGA%3A1596220527141&ei=b2QkX8KkCK-x5OUP4JiNwAg&q=mortes+por+covid+em+sp&oq=Mortes+por&gs_lcp=CgZwc3ktYWIQAxgBMgUIABCxAzIFCAAQsQMyBAgAEEMyAggAMgUIABCxAzICCAAyBQgAELEDMgIIADICCAAyBQgAELEDOgQIIxAnOgQILhAnOggILhCxAxCDAToICAAQsQMQgwE6BAguEEM6BwgjEOoCECc6CQgjEOoCECcQEzoHCAAQsQMQQzoKCAAQsQMQgwEQQ1CUNFicTmCqY2gCcAB4AIABeYgBuwmSAQM2LjaYAQCgAQGqAQdnd3Mtd2l6sAEKwAEB&sclient=psy-ab">
          Quarentena
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
