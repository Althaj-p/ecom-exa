import React, { useState, useEffect } from 'react';
import axios from 'axios';
import constants from '../data/constants';
import { Api } from '../data/Api';
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Divider,
  Stack,
  Grid,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const Cart = () => {
  const [cart, setCart] = useState(null); // Holds cart data
  const [loading, setLoading] = useState(true);

  // Fetch Cart Data
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(Api.cart, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
        alert('Failed to load cart data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Update Quantity using Add to Cart API
  const handleQuantityChange = async (itemId, newQuantity) => {
    console.log(itemId,newQuantity,'data')
    if (newQuantity < 1) return; // Prevent negative quantities

    try {
      // const item = cart.items.find((i) => i.id === itemId);
      await axios.put(
        Api.updateItemQuantity,
        { item_id: itemId, quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      // Refresh cart data
      const response = await axios.get(Api.cart, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      });
      setCart(response.data);
    } catch (error) {
      console.error('Error updating quantity:', error);
      alert('Failed to update quantity.');
    }
  };

  // Remove Item from Cart
  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`${Api.deleteFromCart}/${itemId}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      });
      // Refresh cart data
      const response = await axios.get(Api.cart, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      });
      setCart(response.data);
    } catch (error) {
      console.error('Error removing item:', error);
      alert('Failed to remove item.');
    }
  };

  if (loading) return <Typography>Loading cart...</Typography>;
  if (!cart) return <Typography>No items in your cart.</Typography>;

  const totalAmount = cart.items.reduce((sum, item) => sum + parseFloat(item.cart_total), 0);

  return (
    <Grid container spacing={4} padding={4}>
      {/* Cart Items Section */}
      <Grid item xs={12} md={8}>
        {cart.items.map((item) => (
          <Card key={item.id} sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
            <CardMedia
              component="img"
              sx={{ width: 150, objectFit: 'cover' }}
              image="https://via.placeholder.com/400" // Replace with actual image URL
              alt={item.variant}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">{item.variant.product.name}({item.variant.primary_varient.value}-{item.variant.primary_varient.varient_type} | {item.variant.secondary_varient?.value}-{item.variant.secondary_varient?.varient_type})</Typography>
              <Typography>Price: ₹{parseFloat(item.price).toLocaleString()}</Typography>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ marginTop: 2 }}>
                <IconButton onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                  <Remove />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                  <Add />
                </IconButton>
              </Stack>
            </CardContent>

            {/* Actions Section at Far Right */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                marginLeft: 'auto', // Push this section to the far right
                padding: 2,
              }}
            >
              <Typography sx={{ marginBottom: 1 }}>
                Total: ₹{parseFloat(item.cart_total).toLocaleString()}
              </Typography>
              <Button
                color="error"
                startIcon={<Delete />}
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </Button>
            </Box>
          </Card>
        ))}
      </Grid>

      {/* Price Details Section */}
      <Grid item xs={12} md={4}>
        <Card sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Price Details
          </Typography>
          <Divider />
          <Box sx={{ marginTop: 2 }}>
            <Typography>
              Price ({cart.items.length} item{cart.items.length > 1 ? 's' : ''}): ₹
              {totalAmount.toLocaleString()}
            </Typography>
            <Typography>Delivery Charges: ₹40</Typography>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Total Amount: ₹{(totalAmount + 40).toLocaleString()}
            </Typography>
            <Typography color="green" sx={{ marginTop: 1 }}>
              You will save ₹13,401 on this order
            </Typography>
            <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
              Place Order
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cart;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { 
//   Box, Button, Typography, Card, CardMedia, CardContent, 
//   IconButton, Divider, Stack, Grid 
// } from '@mui/material';
// import { Add, Remove, Delete } from '@mui/icons-material';
// import { Api } from '../data/Api';

// const Cart = () => {
//   const [cart, setCart] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch Cart Data
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get(Api.cart, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         });
//         setCart(response.data);
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//         alert('Failed to load cart data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCart();
//   }, []);

//   // Handle Quantity Change and Call API Immediately
//   const handleQuantityChange = async (itemId, change) => {
//     try {
//       const item = cart.items.find((item) => item.variant.id === itemId);
//       const newQuantity = item.quantity + change;

//       if (newQuantity < 1) return; // Prevent negative quantity

//       await axios.post(
//         Api.addToCart,
//         { variant_id: itemId, quantity: newQuantity },
//         { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
//       );

//       // Update Cart Data After Successful API Call
//       setCart((prev) => ({
//         ...prev,
//         items: prev.items.map((item) =>
//           item.variant.id === itemId ? { ...item, quantity: newQuantity } : item
//         ),
//       }));
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//       alert('Failed to update quantity.');
//     }
//   };

//   // Handle Remove Item
//   const handleRemoveItem = async (itemId) => {
//     try {
//       await axios.delete(`${Api.deleteFromCart}/${itemId}/`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
//       });

//       // Remove item from the cart
//       setCart((prev) => ({
//         ...prev,
//         items: prev.items.filter((item) => item.id !== itemId),
//       }));
//     } catch (error) {
//       console.error('Error removing item:', error);
//       alert('Failed to remove item.');
//     }
//   };

//   if (loading) return <Typography>Loading cart...</Typography>;
//   if (!cart) return <Typography>No items in your cart.</Typography>;

//   const totalAmount = cart.items.reduce((sum, item) => sum + parseFloat(item.cart_total), 0);

//   return (
//     <Grid container spacing={4} padding={4}>
//       {/* Cart Items Section */}
//       <Grid item xs={12} md={8}>
//         {cart.items.map((item) => (
//           <Card key={item.id} sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
//             <CardMedia
//               component="img"
//               sx={{ width: 150, objectFit: 'cover' }}
//               image="https://via.placeholder.com/400" // Replace with actual image URL
//               alt={item.variant}
//             />
//             <CardContent sx={{ flex: 1 }}>
//               <Typography variant="h6">
//                 {item.variant.product.name} (
//                 {item.variant.primary_varient.value}-{item.variant.primary_varient.varient_type} |{' '}
//                 {item.variant.secondary_varient?.value}-{item.variant.secondary_varient?.varient_type})
//               </Typography>
//               <Typography>Price: ₹{parseFloat(item.price).toLocaleString()}</Typography>
//               <Stack direction="row" spacing={1} alignItems="center" sx={{ marginTop: 2 }}>
//                 <IconButton onClick={() => handleQuantityChange(item.variant.id, -1)}>
//                   <Remove />
//                 </IconButton>
//                 <Typography>{item.quantity}</Typography>
//                 <IconButton onClick={() => handleQuantityChange(item.variant.id, 1)}>
//                   <Add />
//                 </IconButton>
//               </Stack>
//             </CardContent>

//             {/* Actions Section */}
//             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: 2 }}>
//               <Typography sx={{ marginBottom: 1 }}>
//                 Total: ₹{parseFloat(item.cart_total).toLocaleString()}
//               </Typography>
//               <Button
//                 color="error"
//                 startIcon={<Delete />}
//                 onClick={() => handleRemoveItem(item.id)}
//               >
//                 Remove
//               </Button>
//             </Box>
//           </Card>
//         ))}
//       </Grid>

//       {/* Price Details Section */}
//       <Grid item xs={12} md={4}>
//         <Card sx={{ padding: 2 }}>
//           <Typography variant="h6" gutterBottom>
//             Price Details
//           </Typography>
//           <Divider />
//           <Box sx={{ marginTop: 2 }}>
//             <Typography>
//               Price ({cart.items.length} item{cart.items.length > 1 ? 's' : ''}): ₹
//               {totalAmount.toLocaleString()}
//             </Typography>
//             <Typography>Delivery Charges: ₹40</Typography>
//             <Typography variant="h6" sx={{ marginTop: 2 }}>
//               Total Amount: ₹{(totalAmount + 40).toLocaleString()}
//             </Typography>
//             <Typography color="green" sx={{ marginTop: 1 }}>
//               You will save ₹13,401 on this order
//             </Typography>
//             <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
//               Place Order
//             </Button>
//           </Box>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default Cart;
