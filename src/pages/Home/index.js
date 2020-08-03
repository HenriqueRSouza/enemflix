import React from 'react';
import Menu from '../../components/Menu/index.js';
import dadosIniciais from '../../data/dados_iniciais.json'
import BanerMain from '../../components/BannerMain/index.js'
import Carousel from '../../components/Carousel/index.js'
import Footer from '../../components/Footer/index'
import BannerMain from '../../components/BannerMain/index.js';



function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu  />
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end"}
      />  
      <Carousel 
        category={dadosIniciais.categorias[1]}
        />
      <Carousel 
        category={dadosIniciais.categorias[2]}
        />
      <Carousel 
        category={dadosIniciais.categorias[3]}
        />
      <Carousel 
        category={dadosIniciais.categorias[4]}
        />
      <Carousel 
        category={dadosIniciais.categorias[5]}
        />
      <Footer />
    </div>
  );
}

export default Home;
