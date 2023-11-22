import './SelectedArticle.css';
import { Link, useParams } from 'react-router-dom';

function SelectedArticle( {allArticlesWithIds, formatUSDate} ) {
    const { id } = useParams();
    
    function getArticleById(id) {
        return allArticlesWithIds?.find((article) => {
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
            <div className="content-container">
                <div className="home-link">
                    <Link to="/">Return to Home Page</Link>
                </div>
                <div className="image-container">
                    <img src={currentArticle.urlToImage} alt="" aria-hidden="true" />
                </div>
                <div className="text">
                    <p className="date">Date Published: {formatUSDate(currentArticle.publishedAt)}</p>
                    <p className="source">Source: {currentArticle.source.name}  |  <a href={currentArticle.url}>Read Full Article</a></p>
                    <hr />
                    <p>{currentArticle.content}</p>
                </div>
            </div>
        </div>
    )
}

export default SelectedArticle;