import APiData from "./MockData.json";
import VideoCard from "./VideoCard";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function VideoSearcher(props) {
  // const videos = APiData.videos;
  // console.log(videos);
  const [videos, setVideos] = useState([]);
  const fetchVideos = async () => {
    let url = "https://content-xflix-backend.azurewebsites.net/v1/videos";
    const response = await axios.get(url);
    const listOfVideos = response.data.video;
    setVideos(listOfVideos);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <Grid container spacing={2}>
      {videos.map((video) => {
        const { id, previewImage, genre, title, releaseDate } = video;
        return (
          <Grid item key={id} xs={12} sm={6} md={4} lg={4}>
            <VideoCard
              imgLink={previewImage}
              genre={genre}
              title={title}
              releaseDate={releaseDate}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default VideoSearcher;
