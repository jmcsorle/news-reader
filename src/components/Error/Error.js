import './Error.css';
import { Link } from 'react-router-dom';
import dogs from '../../assets/CutePups.png'

function Error( {error} ) {
    return (
        <div className="error-handling">
      {error ? (
        <div className="error-message">
        <h2>{error}</h2>
        </div>
      ) : (
        <div className="error-message">
        <h2>Oops! Wrong page.</h2>
        </div>
      )}
      <div className="error-home-link">
        <Link to="/">Return to Home Page</Link>
      </div>
      <div className="image-container">
        <img src={dogs} alt="" className="dog-image" />
      </div>
    </div>
    );    
}

export default Error;