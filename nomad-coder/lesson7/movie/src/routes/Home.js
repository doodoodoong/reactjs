import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setLoading(false);
    setMovie(json.data.movies);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>{loading ? <h1>Loading....</h1> : <div></div>}</div>;
}

export default Home;
