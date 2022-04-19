
export const obtenerGifs = async(categorias) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categorias) }&limit=15&api_key=gSkJ2w1Aw9fiv7pcIRr7s7JUAy7GrEDB`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map( img => {
        return{
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    })

    //console.log(gifs);
    return gifs;
}