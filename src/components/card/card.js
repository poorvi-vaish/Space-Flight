import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import moment from "moment";
import "./card.css";

const ArticleCard = ({ id, title, publishedAt, updatedAt, image }) => {
  return (
    <div className="card">
      <Link to={`/articles/${id}`} className="link">
        <CardActionArea>
          <Card sx={{ maxWidth: 400, minHeight: 330 }}>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="articles"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text"
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text"
              >
                {`Published On : ${moment(`${publishedAt}`).format(
                  "MMMM Do YYYY"
                )}`}
                <br />
                {`Last Updated: ${moment(`${updatedAt}`).format(
                  "MMMM Do YYYY"
                )}`}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Link>
    </div>
  );
};

export default ArticleCard;
