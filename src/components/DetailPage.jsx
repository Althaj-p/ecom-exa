import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  CardMedia,
  Box,
  Chip,
  Divider,
  IconButton,
  Paper,
  Rating,
  TextField,
  Avatar,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import constants from '../data/constants';
import SendIcon from '@mui/icons-material/Send';
import { Api } from '../data/Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductDetail = ({ product }) => {
  const {
    variant_name,
    price,
    discount_price,
    sku,
    total_stock,
    primary_varient,
    secondary_varient,
    variant_images,
    id,
    product: { name, description, category, ratings},
  } = product;

  const [selectedImage, setSelectedImage] = useState(
    variant_images.length > 0
      ? `${constants.port}${variant_images[0].image}`
      : 'https://via.placeholder.com/400'
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(4);
  const navigate = useNavigate(); // Initialize navigation hook


  const handleNextImage = () => {
    const newIndex = (currentIndex + 1) % variant_images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(`${constants.port}${variant_images[newIndex].image}`);
  };

  const handlePrevImage = () => {
    const newIndex = 
      (currentIndex - 1 + variant_images.length) % variant_images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(`${constants.port}${variant_images[newIndex].image}`);
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setSelectedImage(`${constants.port}${variant_images[index].image}`);
  };

  const handleReviewSubmit = () => {
    console.log('New Review:', newReview);
    setNewReview('');
  };

  const handleAddToCart = async () => {  
    try {
      const response = await axios.post(
        Api.addToCart,
        {
          variant_id: id,
          quantity:1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Token for authentication
            // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwMTIwMzc4LCJpYXQiOjE3MzAxMTMxNzgsImp0aSI6IjZmMmNhNzNiYjc0ZjQ1YTdhMDBmNDMxYTVhODU1ZTc4IiwidXNlcl9pZCI6MX0.GXs60rn_z_B6QIT8wtQ_x9YDdggRoJJ6ArJnitfbrJA', // Token for authentication
          },
        }
      );
  
      alert('Item added to cart successfully!');
      navigate('/cart'); // Redirect to cart page
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error adding to cart:', error.response.data);
        alert(error.response.data.error || 'Failed to add to cart');
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response from server:', error.request);
        alert('No response from the server. Please try again.');
      } else {
        // Something else went wrong
        console.error('Error adding to cart:', error.message);
        alert('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Grid container spacing={4}>
        {/* Left Section: Product Images */}
        <Grid item xs={12} md={6}>
          <Box position="relative">
            {/* Main Product Image */}
            <CardMedia
              component="img"
              height="400"
              image={selectedImage}
              alt={variant_name}
              sx={{ borderRadius: 2, cursor: 'pointer' }}
              onClick={() => handleImageClick(currentIndex)} // Click to enlarge on larger devices
            />
            {/* Image Navigation Arrows for Small Devices */}
            <Box
              display={{ xs: 'flex', md: 'none' }}
              justifyContent="space-between"
              position="absolute"
              top="50%"
              left="0"
              right="0"
              sx={{ transform: 'translateY(-50%)' }}
            >
              <IconButton onClick={handlePrevImage} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '50%' }}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton onClick={handleNextImage} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '50%' }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
            {/* Image Thumbnails for Larger Devices */}
            {/* <Box display={{ xs: 'none', md: 'flex', justifyContent: 'center', mt: 2 }}>
              {variant_images.map((image, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  height="100"
                  image={`${constants.port}${image.image}`}
                  alt={variant_name}
                  sx={{
                    borderRadius: 1,
                    margin: 1,
                    cursor: 'pointer',
                    border: currentIndex === index ? '2px solid blue' : 'none',
                  }}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </Box> */}
            <Box 
              display={{ xs: 'none', md: 'flex' }} 
              justifyContent="flex-start" 
              mt={2}
              sx={{
                overflowX: 'auto',  // Enables horizontal scrolling
                maxWidth: '100%',    // Keeps it within the parent div
                padding: 1,
                '&::-webkit-scrollbar': {  // Custom scrollbar styling
                  height: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#888', 
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: '#555',
                },
                // '&::-webkit-scrollbar': {
                //   display: 'none',  // Hides scrollbar for WebKit browsers (Chrome, Safari)
                // },
                // '-ms-overflow-style': 'none',  // Hides scrollbar for Internet Explorer and Edge
                // scrollbarWidth: 'none',  
              }}
            >
              {variant_images.map((image, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  sx={{
                    height: 80,  // Adjust thumbnail height
                    width: 80,   // Adjust thumbnail width
                    borderRadius: 1,
                    marginRight: 1,  // Space between thumbnails
                    cursor: 'pointer',
                    border: currentIndex === index ? '2px solid blue' : 'none',
                    flex: '0 0 auto', // Prevents shrinking
                  }}
                  image={`${constants.port}${image.image}`}
                  alt={variant_name}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Right Section: Product Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {variant_name}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {category}
          </Typography>

          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="h5" color="primary" sx={{ mr: 2 }}>
              ₹{discount_price || price}
            </Typography>
            {discount_price && (
              <Typography
                variant="body2"
                sx={{ textDecoration: 'line-through', color: 'text.secondary' }}
              >
                ₹{price}
              </Typography>
            )}
          </Box>

          <Typography variant="body2" color="textSecondary" paragraph>
            SKU: {sku}
          </Typography>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>

          <Box display="flex" alignItems="center" mb={2}>
            <Chip
              label={total_stock > 0 ? 'In Stock' : 'Out of Stock'}
              color={total_stock > 0 ? 'success' : 'error'}
              sx={{ mr: 2 }}
            />
            <Typography variant="body2">
              {total_stock} items available
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" gutterBottom>
            Variant: {primary_varient.value} {primary_varient.varient_type} |{' '}
            {secondary_varient.value} {secondary_varient.varient_type}
          </Typography>

          <Box display="flex" mt={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<AddShoppingCartIcon />}
              sx={{ mr: 2 }}
              disabled={total_stock === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              startIcon={<FavoriteIcon />}
            >
              Add to Wishlist
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Product Specifications Section */}
      <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Product Specifications
        </Typography>
        <ul>
          <li><Typography>256 GB ROM</Typography></li>
          <li><Typography>8 GB RAM</Typography></li>
          <li><Typography>Black Color</Typography></li>
        </ul>
      </Paper>

      {/* Ratings and Reviews Section */}
      <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Ratings & Reviews
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <Rating value={4} readOnly onChange={(e, newValue) => setRating(newValue)} />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {4} / 5
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <Avatar sx={{ mr: 2 }}>U</Avatar>
              <TextField
                fullWidth
                label="Write a review..."
                variant="outlined"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                sx={{ mr: 2 }}
              />
              <IconButton color="primary" onClick={handleReviewSubmit}>
                <SendIcon />
              </IconButton>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Example Review */}
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar sx={{ mr: 2 }}>J</Avatar>
              <Box>
                <Typography variant="subtitle1">John Doe</Typography>
                <Rating value={5} readOnly size="small" />
                <Typography variant="body2" color="textSecondary">
                  August 18, 2024
                </Typography>
                <Typography variant="body1" paragraph>
                  Amazing product! Highly recommend it.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
    </Container>
  );
};

export default ProductDetail;
