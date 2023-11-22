import './HeadlineCard.css';
import { Link } from 'react-router-dom';

function HeadlineCard({
  headline,
  content,
  description,
  url,
  imageURL,
  datePublished,
  id,
}) {
  return (
    <div className="card" key={id} id={id}>
      <h2>{headline}</h2>
      <p>Date Published: {datePublished}</p>
      <img src={imageURL} alt="" />
      <p>{description}</p>
      <div className="read-more">
      <Link to={`/articleDetails/${id}`}>
        Read More <span className="sr-only">about {headline}</span>
      </Link>
      </div>
    </div>
  );
}

export default HeadlineCard;
