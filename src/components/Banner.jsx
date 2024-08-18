
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ color: 'white', textAlign: 'center', p: 3 }}>
      {/* <Typography variant="h4" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="body1" gutterBottom>
        We offer amazing products and services.
      </Typography> */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '200px' }} />
          </Box>
        ))}
      </Slider>
      {/* <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
        Learn More
      </Button> */}
    </Box>
  );
}
