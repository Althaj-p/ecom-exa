import { Container, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Axios from "axios";
import constants from '../data/constants';

export default function Category() {
  const [categories_list, setCategories] = useState([])
  useEffect(() => {
    Axios.get(`${constants.port}/api/categories`, {})
      .then((res) => {
        if (res.data.status === 1) {
          setCategories(res.data.data);
        }
        console.log(res.data.data, "result");
      })
      .catch((error) => {
        console.log("Error Fetching categories");
      });
  }, []);

  return (
    <Container
      className="hide-scrollbar"
      style={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        padding: '20px',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // Internet Explorer and Edge
      }}
    >
      <style>
        {`
      /* Hide scrollbar for Chrome, Safari, and Opera */
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
      </style>

      <Box
        display="inline-block" // Keep inline-block to maintain horizontal scroll
        style={{
          display: 'flex',
          justifyContent: 'center',
          minWidth: 'max-content', // This ensures items don't shrink on small screens
        }}
      >
        {categories_list.map((category, index) => (
          <Box
            key={index}
            component="a"
            href="#"
            textAlign="center"
            display="inline-block"
            style={{ marginRight: '20px', textDecoration: 'none' }} 
          >
            <img
              src={category.image?`${constants.port}${category.image}`:'https://via.placeholder.com/300x200'}
              alt={category.name || "Category Image"}
              style={{ width: 80, height: 80, borderRadius: "50%" }}
            />
            {category.name && (
              <Typography variant="body1" style={{ textDecoration: 'none', color: 'black' }}>{category.name}</Typography>
            )}
          </Box>
        ))}
      </Box>
    </Container>);
}
