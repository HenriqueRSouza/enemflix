import React from 'react';
import PageDefault from '../../../components/PageDefault/index.js'
import { Link } from 'react-router-dom';

function CadastroVideo (){
    return(
        <PageDefault>
            <h1>Pagina de cadastro</h1>

            <Link to='/cadastro/Categoria/'>
                Cadastrar Categoria 
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;