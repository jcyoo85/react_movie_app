import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function MovieApp() {
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
    <div>
      <h1>movie</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key = {movie.id}
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

export default MovieApp;