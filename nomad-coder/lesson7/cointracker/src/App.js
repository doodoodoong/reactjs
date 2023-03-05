import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (e) => {
    setUsd(e.target.value);
  };

  return (
    <>
      <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        <span>Current Your Coin : </span>
        <input placeholder="USD" type={"number"} onChange={onChange}></input>
        <div>
          <span>{usd}</span>
        </div>
        {loading ? (
          <strong>loading....</strong>
        ) : (
          <select>
            {coins.map((i, index) => (
              <option key={index}>
                Name: {i.name}, Symbol: {i.symbol}, USD: {i.quotes.USD.price}
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
}

export default App;
