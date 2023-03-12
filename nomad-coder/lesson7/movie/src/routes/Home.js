import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setLoading(false);
    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt={movie.id} />
            <p>
              <Link to={movie.url}>{movie.title}</Link>
            </p>
            <p>Genres : {movie.genres[0]}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
