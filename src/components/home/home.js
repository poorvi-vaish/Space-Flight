import { React, useState, useEffect } from "react";
import ArticleCard from "../card/card";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { MenuItem, Select } from "@mui/material";
import "./home.css";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [count, setCount] = useState(1);
  const articleCount = [5, 10, 15, 20, 25];

  useEffect(() => {
    getArticles(limit, page);
  }, [limit, page]);

  const handleArticleCount = (e) => {
    setLimit(e.target.value);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const getArticles = async (limit, page) => {
    let start = limit * (page - 1);
    const data = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}&_start=${start}`
    );
    setArticles(data.data);
    const count = await axios.get(
      "https://api.spaceflightnewsapi.net/v3/articles/count"
    );
    setCount(count.data);
  };

  return (
    <>
      <div className="header">
        <h1>ARTICLES ON SPACE FLIGHT</h1>
        <h3>
          Number of articles on each page:{" "}
          <Select
            value={limit}
            onChange={handleArticleCount}
            variant="standard"
          >
            {articleCount.map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </h3>
      </div>
      <div className="articles">
        {articles.map((i) => (
          <ArticleCard
            id={i.id}
            title={i.title}
            publishedAt={i.publishedAt}
            updatedAt={i.updatedAt}
            image={i.imageUrl}
          />
        ))}
      </div>
      <div className="footer">
        <Pagination
          size="medium"
          count={Math.ceil(count / limit)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </>
  );
};

export default Home;
