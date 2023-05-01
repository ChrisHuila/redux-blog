import "../../../css/article.css";

const ArticlesResult = ({articulos}) => {
    const getTime = (time) => {
        return new Date(time).toLocaleDateString()
    }

    return(
        <ul className="articles">
        {
        articulos.map(articulo => (
            <li className="article" key={articulo.id}>
                <a href={articulo.url} target="_blank">
                    <img src={articulo.image} alt={articulo.title} />
                </a>
                <h6>{getTime(articulo.publishedAt)}</h6>
                <h6>{articulo.title}</h6>
            </li>
        ))
        }
    </ul>
    )
}

const NoArticlesResult = () => {
    return(
        <p>No se encontraron resultados</p>
    )
}

const Article = ({articulos}) => {
    const hasArticle = articulos?.length > 0

    return (
        hasArticle
            ? <ArticlesResult articulos={articulos}/>
            : <NoArticlesResult />
      )
}
 
export default Article;