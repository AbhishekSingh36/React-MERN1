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

    const response = await axios.get(url);
    const listOfVideos = response.data.video;
    setVideos(listOfVideos);
  };
  
  return
}

export default VideoSearcher;
