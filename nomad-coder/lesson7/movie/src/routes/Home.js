import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    ).then((res) => console.log(res.data.movies));
  }, []);
  return <div>{loading ? <h1>Loading.....</h1> : null}</div>;
}

export default Home;
