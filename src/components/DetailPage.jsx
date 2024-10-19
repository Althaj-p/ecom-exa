import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Divider,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Box,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ product }) => {
  const {
    name,
    description,
    price,
    images,
    category,
    stockStatus,
    reviews,
    features,
    variants,
    availableQuantity,
  } = product;

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleVariantChange = (event) => {
    const selected = variants.find(variant => variant.id === event.target.value);
    setSelectedVariant(selected);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt={name}
              height="400"
              image={selectedImage}
              title={name}
            />
          </Card>
          <Box display="flex" justifyContent="center" mt={2}>
            {images.map((image, index) => (
              <CardMedia
                key={index}
                component="img"
                image={image}
                alt={`Product image ${index + 1}`}
                onClick={() => handleImageClick(image)}
                style={{
                  width: 60,
                  height: 60,
                  margin: '0 10px',
                  cursor: 'pointer',
                  border: selectedImage === image ? '2px solid #000' : 'none',
                }}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {category}
          </Typography>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            ${price}
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <Chip label={stockStatus} color={stockStatus === 'In Stock' ? 'success' : 'error'} />
            <Typography variant="body2" color="textSecondary" ml={2}>
              Available Quantity: {availableQuantity}
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
          <Divider />
          <FormControl fullWidth margin="normal">
            <InputLabel>Choose Variant</InputLabel>
            <Select value={selectedVariant.id} onChange={handleVariantChange}>
              {variants.map((variant) => (
                <MenuItem key={variant.id} value={variant.id}>
                  {variant.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Quantity</InputLabel>
            <Select value={quantity} onChange={handleQuantityChange}>
              {[...Array(Math.min(availableQuantity, 10)).keys()].map((_, index) => (
                <MenuItem key={index} value={index + 1}>
                  {index + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display="flex" mt={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<AddShoppingCartIcon />}
              style={{ marginRight: '10px' }}
              disabled={stockStatus !== 'In Stock'}
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
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Features
            </Typography>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>
                  <Typography variant="body1">{feature}</Typography>
                </li>
              ))}
            </ul>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="h6" component="h2" gutterBottom>
              Reviews
            </Typography>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <Box key={index} mb={2}>
                  <Typography variant="subtitle1" component="h3">
                    {review.reviewerName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {review.date}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {review.comment}
                  </Typography>
                  <Divider />
                </Box>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                No reviews yet.
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
