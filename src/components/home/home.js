import { React, useState, useEffect } from "react";
import ArticleCard from "../card/card";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { MenuItem, Select } from "@mui/material";
import './home.css'

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

  const handleChange = (e) => {
    setPage(e.target.value);
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
    console.log(data);
  };

  return (
    <>
      <div className='header'>
        <h1>Articles on Space Flight</h1>
        <h3>No. of articles per page:  
        <Select value={limit} onChange={handleArticleCount} variant="standard">
          {articleCount.map((i) => (
            <MenuItem value={i}>{i}</MenuItem>
          ))}
        </Select>
        </h3>
      </div>
      <div className='articles'>
        {articles.map((i) => (
          <ArticleCard
            title={i.title}
            updatedAt={i.updatedAt}
            image={i.imageUrl}
          />
        ))}
      </div>
      <Pagination
        count={Math.ceil(count / limit)}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </>
  );
};

export default Home;
