import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault/index.js'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/index.js'


function CadastroCategoria (){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [values, setValues] = useState(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    function setValue(chave, valor) {
        setValues ({
            ...values, 
            [chave]: valor, //nome: 'valor',
        })
    }

    function handleChange ( infosDoEvento ){
        const { getAttribute, value } = infosDoEvento.target;
            setValue(getAttribute('name'), value);
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome} </h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
            infosDoEvento.preventDefault();
            
            setCategorias([
                ...categorias,
                values
            ]);
            setValues(valoresIniciais)
    }}>

        <FormField 
            value={values.nome}
            onChange={handleChange}
        />
    
        <div>
            <label>
                Descrição:
            <textarea 
                type="text"
                value={values.descricao}
                onChange={ handleChange}
                name="descricao" 
              />
            </label>
        </div>
    
        <div>
            <label>
                Color:
            <input 
                type="color"
                value={values.color}
                name=" color"
                onChange={ handleChange } />
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

            <Link to='/'>
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;