import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const VideoCard = (props) => {
  const {
    id = "",
    previewImage = "",
    genre = "",
    title = "",
    releaseDate = ""
  } = props;
  return  (
    <Grid item>
      <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={previewImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {genre}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {releaseDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default VideoCard;
