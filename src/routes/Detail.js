import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    )
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  }

  console.log(movie);

  useEffect(() => {
    getMovie();
  });

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.title_long}</h3>
          <img src={movie.medium_cover_image} alt={`${movie.title} thumbnail`}/>
          <p>{movie.description_full ? movie.description_full : '준비중...'}</p>
          <p>rating: {movie.rating}</p>
          <p>runtime: {movie.runtime}</p>
          <ul>
            {movie.genres.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;