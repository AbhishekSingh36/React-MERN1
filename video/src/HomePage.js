import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// const debounceFunctions = (func, wait) => {
//   let timeoutId;

//   return function executor(...args) {
//     const later = () => {
//       clearTimeout(timeoutId);
//       func(...args);
//     };

//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(later, wait);
//   };
// };

const debounceFunctions = function (func, wait) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    let context = this;
    let args = arguments;
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
};

const debouncedSearch = debounceFunctions((handler) => handler, 5000);

const HomePage = () => {
  const [videoItems, setVideoItems] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFetchVideos = async (searchQuery = "") => {
    const response = await fetch(
      `https://crio-xflix.herokuapp.com/v1/videos${
        searchQuery ? `?title=${searchQuery}` : ""
      }`
    );
    const finalData = await response.json();
    setVideoItems(finalData?.videos);
  };

  const handleOnChange = (e) => {
    setSearchText(e?.target?.value);
    debouncedSearch(() => handleFetchVideos(e?.target?.value));
  };
  useEffect(() => {
    handleFetchVideos();
  }, []);

  return (
    <>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={searchText}
        onChange={(e) => handleOnChange(e)}
      />
      <Grid container spacing={4} mt={2}>
        {videoItems?.length > 0 &&
          videoItems.map((item) => {
            return (
              <Grid key={item.id} item>
                <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                  <div
                    onClick={() =>
                      window.open(`https://${item.videoLink}`, "_blank")
                    }
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.previewImage}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="body2" component="div">
                        {item.genre}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.releaseDate}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default HomePage;

/**
 * You have an input box
 * You have a enter button
 *
 * What ever user enter in input box, onclick of button that item should be displayed
 * on the screen.
 *
 * Example => Hello and press enter
 * Bye => press enter
 * Hello
 * Goodnight
 *
 * Hello
 * Bye
 * Goodnight
 *
 * whatever items are displayed along with that there are two button edit and delete
 * if pressed deleted, it deletes only that item
 * if pressed edit, then show input box for that item, and on save that item would be edited.
 */
