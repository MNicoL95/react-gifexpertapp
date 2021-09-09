export const getGifs = async(category) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=GItBZrLgwVFWYhG4rl2B28iSJwCwDU5K&q=${ encodeURI(category) }&limit=4`;
    const resp = await fetch (url);
    const { data } = await resp.json();
    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })
    return gifs;

}