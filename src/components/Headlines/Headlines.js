import './Headlines.css';
import HeadlineCard from '../HeadlineCard/HeadlineCard';

function Headlines( {allArticlesWithIds, formatUSDate, searchValue} ) {
    const headlineCard = allArticlesWithIds.filter(article => article.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map(article => {
        return <HeadlineCard
            headline={article.title}
            content={article.content}
            description={article.description}
            url={article.url}
            imageURL={article.urlToImage}
            datePublished={formatUSDate(article.publishedAt)}
            key={article.id}
            id={article.id}
        />
    })
    return (
        <div className="all-headlines">{headlineCard}</div>
    )
}

export default Headlines;