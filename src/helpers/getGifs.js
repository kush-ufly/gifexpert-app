export const getGifs = async (category) => {
    const apiKey = 'IlLFRbh7JT2tnOfUWoFdz6hZKtl5ssCh';

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${apiKey}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);

    const gifs = data.map(img => {
        return ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        })
    })

    console.log(gifs);
    return gifs;
}