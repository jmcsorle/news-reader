import './Headlines.css';
import HeadlineCard from '../HeadlineCard/HeadlineCard';

function Headlines( {allArticles} ) {
    const headlineCard = allArticles.articles.map((headline, index) => {
        return <HeadlineCard
            headline={headline.title}
            content={headline.content}
            description={headline.description}
            url={headline.url}
            imageURL={headline.urlToImage}
            datePublished={headline.publishedAt}
            key={index + 1}
            id={index + 1}
        />
    })
    console.log("HEADLINE CARD", headlineCard)
    return (
        <div className="all-headlines">{headlineCard}</div>
    )
}

export default Headlines;