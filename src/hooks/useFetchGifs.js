import { useState, useEffect } from "react";
import {obtenerGifs} from '../Helpers/ObtenerGifs';


export const useFetchGifs = (categorias) => {

    const [state, setState] =  useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        obtenerGifs(categorias).then( imgs => {
            setTimeout(()=>{
                setState({
                    data: imgs,
                    loading: false
                });

            }, 4000);
        })
    }, [categorias]);

    return state;

}