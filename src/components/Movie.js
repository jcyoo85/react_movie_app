import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from '../css/Movie.module.css';

function Movie({coverImg, title, summary, genres, id}) {
  return (
    <div key = {id} className={Styles.movie}>
      <img src={coverImg} alt={title} className={Styles.movie__img}/>
      <h2 className={Styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={Styles.movie__genres}>
        {genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
}

export default Movie;