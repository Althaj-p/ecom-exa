import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const WishlistPage = ({ wishlist, onRemove, onAddToCart }) => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Wishlist
      </Typography>
      {wishlist.length > 0 ? (
        <Grid container spacing={4}>
          {wishlist.map((product) => (
            <Grid item xs={12} md={6} lg={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imageUrl}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.category}
                  </Typography>
                  <Typography variant="h5" color="textPrimary">
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => onAddToCart(product.id)}
                  >
                    Add to Cart
                  </Button>
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => onRemove(product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box mt={4}>
          <Typography variant="h6" color="textSecondary">
            Your wishlist is empty.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default WishlistPage;
