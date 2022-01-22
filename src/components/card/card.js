import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ArticleCard = ({title, updatedAt,image }) => {
 
  return (
    <div>
    <Card sx={{ maxWidth: 400, minHeight: 330 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {updatedAt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default ArticleCard;
