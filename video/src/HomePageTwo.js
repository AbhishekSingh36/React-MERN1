import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import VideoCard from "./VideoCard";

const HomePageTwo = () => {
  const [searchText, setSearchText] = useState("");
  const [videoData, setVideoData] = useState([]);
  const handleVideoData = async () => {
    const url = searchText
      ? `https://crio-xflix.herokuapp.com/v1/videos?title=${searchText}`
      : "https://crio-xflix.herokuapp.com/v1/videos";
    const response = await fetch(url);
    const finalData = await response.json();
    setVideoData(finalData.videos);
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    handleVideoData();
  }, [searchText]);
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={searchText}
        onChange={(e) => handleChange(e)}
      />
      <Grid container spacing={2}>
        {videoData.map((video) => {
          const {
            id = "",
            previewImage = "",
            genre = "",
            title = "",
            releaseDate = ""
          } = video;
          return (
            <VideoCard
              key={id}
              id={id}
              previewImage={previewImage}
              genre={genre}
              title={title}
              releaseDate={releaseDate}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default HomePageTwo;
