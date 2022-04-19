import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({categorias}) => {

    const {data, loading} = useFetchGifs(categorias);


    return (
        <>
        <h3>{categorias}</h3>
        {loading && <p className='animate__animated animate__pulse'>Cargando...</p>}
            <div className='contenedor-card'>
            {
                data.map(img => (
                    <GifGridItems 
                        key={img.id}
                        {...img}
                    />
                ))
            }
            </div>
        </>
    );
}
