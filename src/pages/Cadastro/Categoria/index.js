import React, { useState } from 'react';

import PageDefault from '../../../components/PageDefault';

function CadastroCategoria (){
    const valoresIniciais = {
        nome: "",
        descricao: "",
        cor: "",
    }
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais);
    

    function setValue (chave, valor) {
        setValues({
        ...values, 
        [chave]: valor,
        })
    }
    function Handle(infosDeEventos){
        setValue(
            infosDeEventos.target.getAttribute('name'), 
            infosDeEventos.target.value
    );
    }


    return(
        <PageDefault>
            <h1> Cadastro de Categoria { values.nome}</h1>

            <form onSubmit={ function handleSubmit (infosDeEventos){
                infosDeEventos.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>
            <div>
                <label>
                    Nome Da Categoria:
                    <input 
                        type="text" 
                        name="nome"
                        value={values.name}
                        onChange={ Handle}
                    />
                </label>
            </div>
            <div> 
                <label>
                    Descrição Da Categoria:
                    <textarea 
                        type="text" 
                        value={values.descricao}
                        name="descricao"
                        onChange={Handle}
                    />
                </label>
            </div>
            
            <div> 
                <label>
                    Cor Da Categoria:
                    <input 
                        type="color" 
                        value={values.cor}
                        name="cor"
                        onChange={ Handle}
                    />
                </label>
            </div>   
                <button>
                    Cadastrar
                </button>
            </form>
        <ul>
            {categorias.map((categoria, indice) => {
                return(
                      <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                )
            })}
        </ul>
          
        </PageDefault>
      );
    }
export default CadastroCategoria;