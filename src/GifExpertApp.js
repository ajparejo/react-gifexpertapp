import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['McLaren']);

    //const agregarEquipo = () => {
    //    setEquipos([...equipos, 'Mercedes']);
    //}

    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory valor={setCategorias}/>
            <hr />

            <ol>
                {
                    categorias.map(categorias => (
                        <GifGrid
                            key={categorias}
                            categorias={categorias}
                        />
                    ))
                }
            </ol>
        </div>
    )
}