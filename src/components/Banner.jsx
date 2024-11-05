import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner({ images }) {
  console.log(images, 'images');

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
      {images.length === 1 ? (
        <Box>
          {images[0].link_url ? (
            <a href={images[0].link_url} target="_blank" rel="noopener noreferrer">
              <img
                src={images[0].image}
                alt={images[0].title||'Banner'}
                style={{ width: '100%', height: '200px' }}
              />
            </a>
          ) : (
            <img
              src={images[0].image}
              alt={images[0].title||'Banner'}
              style={{ width: '100%', height: '200px' }}
            />
          )}
        </Box>
      ) : (
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index}>
              {image.link_url ? (
                <a href={image.link_url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image.image}
                    alt={image.title||`Banner ${index + 1}`}
                    style={{ width: '100%', height: '200px' }}
                  />
                </a>
              ) : (
                <img
                  src={image.image}
                  alt={image.title||`Banner ${index + 1}`}
                  style={{ width: '100%', height: '200px' }}
                />
              )}
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
}
