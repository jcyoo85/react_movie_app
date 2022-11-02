import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import Styles from '../css/Home.module.css';

function Home() {
  //API TEST : https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //async function
  const getMovies = async () => {
    const response = await fetch (
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
    )
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={Styles.container}>
      {loading ? (
        <h1 className={Styles.Loader}>
          <span>Loading...</span>
        </h1>
      ) : (
        <div className={Styles.movies}>
          {movies.map((movie) => (
            <Movie
              key = {movie.id}
              id = {movie.id}
              coverImg = {movie.medium_cover_image}
              title = {movie.title}
              summary = {movie.summary}
              genres = {movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;