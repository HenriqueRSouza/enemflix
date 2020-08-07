import React from 'react';

function FormField ( { value, onChange } ) {
    return(
        <>
        <label>
            Nome da Categoria:
        <input 
            type="text"
            value={value}
            name="nome"
            onChange={ onChange  } 
            />
         </label>
    </>
  )
}

export default FormField;