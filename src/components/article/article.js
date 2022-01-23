import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, Button } from "@mui/material";
import "./article.css";

const Article = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    const data = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles/${id}`
    );
    setData(data.data);
  };

  return (
    <div className="article">
      <Card sx={{ maxWidth: 1000 }}>
        <CardContent sx={{ backgroundColor: "#C3CEDA" }}>
          <Typography gutterBottom variant="h3" component="div">
            <strong> {data.title} </strong>
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          alt="article"
          height="500"
          image={data.imageUrl}
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary" align="justify">
            {data.summary}
          </Typography>
        </CardContent>
        <div className="linkButtons">
          <CardActions>
            <Link to="/">
              <Button size="large">Back to HomePage</Button>
            </Link>
            <a href={data.url} rel="noreferrer" target="_blank">
              <Button size="large">Read More</Button>
            </a>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default Article;
