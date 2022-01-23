import "./App.css";
import Home from "./components/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./components/article/article";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
