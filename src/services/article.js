const apiKey ='ef68e173335b488999ff04629000ae4d';

export const searchArticle = async({search}) => {
    if(search === '') return null;
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}&language=es`;

    try {
        const res = await fetch(url);
        const json = await res.json()

        const articulos = json.articles
        return articulos?.map(articulo => ({
            author: articulo.author,
            content: articulo.content,
            description: articulo.description,
            publishedAt: articulo.publishedAt,
            source: articulo.source,
            title: articulo.title,
            image: articulo.urlToImage,
            url: articulo.url,
            id: Date.now()*Math.random()*10
            }))

    } catch (error) {
        throw new error('error al buscar los articulos')
    }
  
}

export const showHeadLines = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    try {
        const res = await fetch(url);
        const json = await res.json();

        const headlines = json.articles
        return headlines?.map(headline => ({
            author: headline.author,
            content: headline.content,
            description: headline.description,
            publishedAt: headline.publishedAt,
            source: headline.source,
            title: headline.title,
            image: headline.urlToImage,
            url: headline.url,
            id: Date.now()*Math.random()*10
        }))
    } catch (error) {
        throw new error('Error al cargar titulares')
    }
}