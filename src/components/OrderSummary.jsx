import React, {useState,useEffect} from 'react';
import { Box, Typography, Divider, Button, Card, CardMedia, CardContent, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart';

function OrderSummary() {

  return (
    <Box sx={{ padding: '24px', bgcolor: '#f5f5f5',}}>
      <Typography variant="h6" gutterBottom color="primary">
        Order Summary
      </Typography>
      
      {/* <Card variant="outlined" sx={{ display: 'flex', mb: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
          <Typography variant="body1" fontWeight="bold">Pay Using SuperCoins</Typography>
          <Typography variant="body2" color="text.secondary">Balance: 🪙 16</Typography>
          <Typography variant="body2" color="success.main">Save ₹15 using 15 SuperCoins</Typography>
        </Box>
        <Button variant="contained" color="primary" sx={{ alignSelf: 'center', m: 2 }}>Apply</Button>
      </Card> */}
      <Cart/>
      {/* <Card variant="outlined" sx={{ display: 'flex', mb: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 120 }}
          image="https://example.com/product-image.jpg" // Replace with actual image URL
          alt="Product Image"
        />
        <CardContent sx={{ flex: '0 1 auto' }}>
          <Typography variant="subtitle1" fontWeight="bold">
            TECHFIRE Bullets 121 with Beast Mode (40ms Low Latency)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Black Sabre, True Wireless<br />
            Seller: KiratechInnovations
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <Typography variant="h6" fontWeight="bold" color="error">₹500</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through', ml: 1 }}>₹4,999</Typography>
            <Typography variant="body2" color="success.main" sx={{ ml: 1 }}>89% Off</Typography>
          </Box>
          <Typography variant="body2" color="success.main">1 offer available</Typography>

          <Grid container alignItems="center" spacing={1} sx={{ mt: 2 }}>
            <Grid item>
              <IconButton size="small" color="primary">
                <RemoveIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body1">1</Typography>
            </Grid>
            <Grid item>
              <IconButton size="small" color="primary">
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Button variant="text" color="error" sx={{ mt: 1 }}>Remove</Button>
        </CardContent>
      </Card> */}

      <Divider sx={{ my: 2 }} />

      {/* <Box display="flex" justifyContent="center">
        <Button variant="contained" color="warning" size="large" startIcon={<ShoppingCartIcon />}>
          Continue
        </Button>
      </Box> */}
    </Box>
  );
}

export default OrderSummary;
