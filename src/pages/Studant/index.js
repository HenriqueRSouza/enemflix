import React from "react";
import Menu2 from "../../components/Menu2/index.js";
import dadosIniciais from "../../data/dados_iniciais.json";
import Carousel from "../../components/Carousel/index.js";
import Footer from "../../components/Footer/index";
import BannerMain from "../../components/BannerMain/index.js";

function Studant() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu2 />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end"}
      />
      <Carousel category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
      <Carousel category={dadosIniciais.categorias[5]} />
      <Carousel category={dadosIniciais.categorias[6]} />
      <Footer />
    </div>
  );
}

export default Studant;
