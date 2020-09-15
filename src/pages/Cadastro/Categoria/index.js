import React, { useState } from "react";

import PageDefault from "../../../components/PageDefault";

import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function Handle(infosDeEventos) {
    setValue(
      infosDeEventos.target.getAttribute("name"),
      infosDeEventos.target.value
    );
  }

  return (
    <PageDefault>
      <h1> Cadastro de Categoria {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(infosDeEventos) {
          infosDeEventos.preventDefault();
          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={Handle}
        />

        <FormField
          label="Descricao da Categoria"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={Handle}
        />

        <FormField
          label="Cor da Categoria"
          type="color"
          name="cor"
          value={values.cor}
          onChange={Handle}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome} || {categoria.descricao}
            </li>
          );
        })}
      </ul>
    </PageDefault>
  );
}
export default CadastroCategoria;
