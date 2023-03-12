// 1. home.js에서 초기페이지 만들기
// 2. movie.js에서 api로 영화정보 불러오는 페이지 만들기
// 2. 영화 상세정보 detail.js에서 보여주기
// api `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
