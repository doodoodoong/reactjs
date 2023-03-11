import { useEffect } from "react";
import { useState } from "react";

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

  return (
    <div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        movies.map((movie) => (
          <div>
            <img src={movie.medium_cover_image} alt={movie.id} />
            <p>{movie.title}</p>
            <p>Summary : {movie.summary}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
