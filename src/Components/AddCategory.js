import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({valor}) => {

    const [valorEntrada, setValorEntrada] = useState();

    const cambiarValorEntrada = (e) =>{
        setValorEntrada(e.target.value);
    }

    const manejarEnvios = (e) =>{
        e.preventDefault();
        
        if (valorEntrada.trim().length > 2){
            valor(valor => [valorEntrada, ...valor]);
            setValorEntrada('');
        }
        
    }

    return (
        <form onSubmit={manejarEnvios}>
            <input
                type="text"
                value={valorEntrada}
                onChange={cambiarValorEntrada}
            />
        </form>
    );
}

AddCategory.propTypes = {
    valor: PropTypes.func.isRequired
}

