import './Headlines.css';
import HeadlineCard from '../HeadlineCard/HeadlineCard';

function formatUSDate(dateString) {
    const dateObject = new Date(dateString);
    if (!isNaN(dateObject.getTime())) {
        const formattedDateString = 
        (dateObject.getMonth() +1).toString().padStart(2, '0') + '/' +
        dateObject.getDate().toString().padStart(2, '0') + '/' +
        dateObject.getFullYear();
        return formattedDateString;
    }
    return 'No date available.';
}

function Headlines( {allArticles} ) {
    const headlineCard = allArticles.articles.map((headline, index) => {
        return <HeadlineCard
            headline={headline.title}
            content={headline.content}
            description={headline.description}
            url={headline.url}
            imageURL={headline.urlToImage}
            datePublished={formatUSDate(headline.publishedAt)}
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