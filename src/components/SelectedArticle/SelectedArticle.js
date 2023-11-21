import './SelectedArticle.css';
import { useParams } from 'react-router-dom';

function SelectedArticle( {allArticlesWithIds, formatUSDate} ) {
    const { id } = useParams();
    
    function getArticleById(id) {
        return allArticlesWithIds.find((article) => {
            return article.id === id;
        });
    }

    let currentArticle = getArticleById(parseInt(id));

    if(!currentArticle) {
        return <p>Loading ...</p>;
    }

    return (
        <div className="article-details">
            <h2>{currentArticle.title}</h2>
            {/* <p className="date-source">Date Published: {formatUSDate(currentArticle.publishedAt)}  |  Source: {currentArticle.source.name}</p> */}
            <div className="content-container">
                <div className="image-container">
                    <img src={currentArticle.urlToImage} alt="" aria-hidden="true" />
                    <p className="caption">Source: {currentArticle.source.name}</p>
                </div>
                <div className="text">
                    <p className="date">Date Published: {formatUSDate(currentArticle.publishedAt)}</p>
                    <p>{currentArticle.content}</p>
                </div>
            </div>
        </div>
    )
}

export default SelectedArticle;