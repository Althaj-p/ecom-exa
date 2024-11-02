// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import constants from '../data/constants';
// import { Api } from '../data/Api';
// import {
//   Box,
//   Button,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   IconButton,
//   Divider,
//   Stack,
//   Grid,
// } from '@mui/material';
// import { Add, Remove, Delete } from '@mui/icons-material';
// import { useDispatch } from 'react-redux';
// // import { setCart } from '../redux/slices/cartSlice';
// import {setCart} from '../redux/slices/cartSlice';

// const Cart = () => {
//   const [cart, setCart] = useState(null); // Holds cart data
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();


//   // Fetch Cart Data
//   const fetchCart = async () => {
//     try {
//       const response = await axios.get(Api.cart, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });
//       setCart(response.data);
//       // Calculate total quantity and amount
//       const totalQuantity = response.data.items.reduce((sum, item) => sum + item.quantity, 0);
//       const totalAmount = response.data.items.reduce((sum, item) => sum + parseFloat(item.cart_total), 0);

//       // Update Redux state
//       dispatch(setCart({ items: response.data.items, totalQuantity, totalAmount }));
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//       alert('Failed to load cart data.');
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     // const fetchCart = async () => {
//     //   try {
//     //     const response = await axios.get(Api.cart, {
//     //       headers: {
//     //         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//     //       },
//     //     });
//     //     setCart(response.data);
//     //     // Calculate total quantity and amount
//     //     const totalQuantity = response.data.items.reduce((sum, item) => sum + item.quantity, 0);
//     //     const totalAmount = response.data.items.reduce((sum, item) => sum + parseFloat(item.cart_total), 0);

//     //     // Update Redux state
//     //     dispatch(setCart({ items: response.data.items, totalQuantity, totalAmount }));
//     //   } catch (error) {
//     //     console.error('Error fetching cart:', error);
//     //     alert('Failed to load cart data.');
//     //   } finally {
//     //     setLoading(false);
//     //   }
//     // };

//     fetchCart();
//   }, []);

//   // Update Quantity using Add to Cart API
//   const handleQuantityChange = async (itemId, newQuantity) => {
//     console.log(itemId,newQuantity,'data')
//     if (newQuantity < 1) return; // Prevent negative quantities

//     try {
//       // const item = cart.items.find((i) => i.id === itemId);
//       await axios.put(
//         Api.updateItemQuantity,
//         { item_id: itemId, quantity: newQuantity },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         }
//       );
//       // Refresh cart data
//       // const response = await axios.get(Api.cart, {
//       //   headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
//       // });
//       // setCart(response.data);
//       fetchCart();
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//       alert('Failed to update quantity.');
//     }
//   };

//   // Remove Item from Cart
//   const handleRemoveItem = async (itemId) => {
//     try {
//       await axios.delete(`${Api.deleteFromCart}/${itemId}/`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
//       });
//       // Refresh cart data
//       // const response = await axios.get(Api.cart, {
//       //   headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
//       // });
//       // setCart(response.data);
//       fetchCart();
//     } catch (error) {
//       console.error('Error removing item:', error);
//       alert('Failed to remove item.');
//     }
//   };

//   if (loading) return <Typography>Loading cart...</Typography>;
//   if (!cart) return <Typography>No items in your cart.</Typography>;

//   const totalAmount = cart.items.reduce((sum, item) => sum + parseFloat(item.cart_total), 0);

//   return (
//     <Grid container>
//       {/* Cart Items Section */}
//       <Grid item xs={12} md={12}>
//         {cart.items.map((item) => (
//           <Card key={item.id} sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
//             <CardMedia
//               component="img"
//               sx={{ width: 150, objectFit: 'cover' }}
//               image={
//                 item.variant.variant_images?.length > 0
//                   ? `${constants.port}${item.variant.variant_images[0].image}`
//                   : "https://via.placeholder.com/400"
//               }
//               alt={item.variant}
//             />
//             <CardContent sx={{ flex: 1 }}>
//               <Typography variant="h6">{item.variant.product.name}({item.variant.primary_varient.value}-{item.variant.primary_varient.varient_type} | {item.variant.secondary_varient?.value}-{item.variant.secondary_varient?.varient_type})</Typography>
//               <Typography>Price: ₹{parseFloat(item.price).toLocaleString()}</Typography>
//               <Stack direction="row" spacing={1} alignItems="center" sx={{ marginTop: 2 }}>
//                 <IconButton onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
//                   <Remove />
//                 </IconButton>
//                 <Typography>{item.quantity}</Typography>
//                 <IconButton onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
//                   <Add />
//                 </IconButton>
//               </Stack>
//             </CardContent>

//             {/* Actions Section at Far Right */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'flex-end',
//                 marginLeft: 'auto',
//                 padding: 2,
//               }}
//             >
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
//       {/* <Grid item xs={12} md={4}>
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
//       </Grid> */}
//     </Grid>
//   );
// };

// export default Cart;
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
import { useDispatch } from 'react-redux';
import { setCart } from '../redux/slices/cartSlice';

const Cart = () => {
  const [cart, setCartData] = useState(null); // Local state to hold cart data
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetch Cart Data
  const fetchCart = async () => {
    try {
      const response = await axios.get(Api.cart, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      // Calculate total quantity and amount in component
      const totalQuantity = response.data.items.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = response.data.items.reduce((sum, item) => sum + parseFloat(item.cart_total), 0);

      // Update local state
      setCartData(response.data);

      // Dispatch a plain object to Redux with fetched data
      dispatch(setCart({ items: response.data.items, totalQuantity, totalAmount }));
    } catch (error) {
      console.error('Error fetching cart:', error);
      alert('Failed to load cart data.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch cart on component mount
  useEffect(() => {
    fetchCart();
  }, []);

  // Update Quantity using Add to Cart API
  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative quantities

    try {
      await axios.put(
        Api.updateItemQuantity,
        { item_id: itemId, quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      fetchCart(); // Re-fetch cart data after updating quantity
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
      fetchCart(); // Re-fetch cart data after removing item
    } catch (error) {
      console.error('Error removing item:', error);
      alert('Failed to remove item.');
    }
  };

  if (loading) return <Typography>Loading cart...</Typography>;
  if (!cart) return <Typography>No items in your cart.</Typography>;

  const totalAmount = cart.items.reduce((sum, item) => sum + parseFloat(item.cart_total), 0);

  return (
    <Grid container>
      {/* Cart Items Section */}
      <Grid item xs={12} md={12}>
        {cart.items.map((item) => (
          <Card key={item.id} sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
            <CardMedia
              component="img"
              sx={{ width: 150, objectFit: 'cover' }}
              image={
                item.variant.variant_images?.length > 0
                  ? `${constants.port}${item.variant.variant_images[0].image}`
                  : "https://via.placeholder.com/400"
              }
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
                marginLeft: 'auto',
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
    </Grid>
  );
};

export default Cart;
