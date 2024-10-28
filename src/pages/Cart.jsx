import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Cart.css';
import constants from '../data/constants';
import {Api} from '../data/Api';


// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [priceDetails, setPriceDetails] = useState({
//     totalPrice: 0,
//     totalDiscount: 0,
//     deliveryCharges: 40,
//     finalAmount: 0,
//   });

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get(Api.cart, {
//         headers: {
//         //   Authorization: `Bearer ${localStorage.getItem('token')}`,
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwMTIwMzc4LCJpYXQiOjE3MzAxMTMxNzgsImp0aSI6IjZmMmNhNzNiYjc0ZjQ1YTdhMDBmNDMxYTVhODU1ZTc4IiwidXNlcl9pZCI6MX0.GXs60rn_z_B6QIT8wtQ_x9YDdggRoJJ6ArJnitfbrJA',
//         },
//       });
//       setCartItems(response.data.items);
//       calculatePriceDetails(response.data.items);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const handleQuantityChange = async (id, newQuantity) => {
//     if (newQuantity < 1) return; // Prevent negative quantity

//     try {
//       await axios.put(`${constants.api}/cart/${id}/`, {
//         quantity: newQuantity,
//       });
//       const updatedItems = cartItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       );
//       setCartItems(updatedItems);
//       calculatePriceDetails(updatedItems);
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//     }
//   };

//   const handleRemoveItem = async (id) => {
//     try {
//       await axios.delete(`${constants.api}/cart/${id}/`);
//       const remainingItems = cartItems.filter((item) => item.id !== id);
//       setCartItems(remainingItems);
//       calculatePriceDetails(remainingItems);
//     } catch (error) {
//       console.error('Error removing item:', error);
//     }
//   };

//   const calculatePriceDetails = (items) => {
//     const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     const totalDiscount = items.reduce((sum, item) => sum + item.discount, 0);
//     const finalAmount = totalPrice - totalDiscount + priceDetails.deliveryCharges;
//     setPriceDetails({ totalPrice, totalDiscount, deliveryCharges: 40, finalAmount });
//   };

//   return (
//     <div className="cart-container">
//       <div className="cart-items">
//         {cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.image} alt={item.name} className="item-image" />
//             <div className="item-details">
//               <h3>{item.name}</h3>
//               <p>Seller: {item.seller}</p>
//               <p>
//                 ₹{item.originalPrice} <span className="discounted-price">₹{item.price}</span>{' '}
//                 {item.discountPercentage}% Off
//               </p>
//               <p>Delivery by {item.deliveryDate} | ₹{item.deliveryCharges}</p>

//               <div className="quantity-controls">
//                 <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
//               </div>

//               <div className="item-actions">
//                 <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//                 <button>Save for later</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="price-details">
//         <h3>Price Details</h3>
//         <div className="price-row">
//           <span>Price ({cartItems.length} item{cartItems.length > 1 ? 's' : ''})</span>
//           <span>₹{priceDetails.totalPrice}</span>
//         </div>
//         <div className="price-row">
//           <span>Discount</span>
//           <span>− ₹{priceDetails.totalDiscount}</span>
//         </div>
//         <div className="price-row">
//           <span>Delivery Charges</span>
//           <span>₹{priceDetails.deliveryCharges}</span>
//         </div>
//         <div className="price-row total">
//           <span>Total Amount</span>
//           <span>₹{priceDetails.finalAmount}</span>
//         </div>
//         <p>You will save ₹{priceDetails.totalDiscount} on this order</p>
//         <button className="place-order-btn">Place Order</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
const Cart = () => {
    const [cart, setCart] = useState(null); // Holds cart data
    const [loading, setLoading] = useState(true);
  
    // Fetch Cart Data
    useEffect(() => {
      const fetchCart = async () => {
        try {
          const response = await axios.get(Api.cart, {
            headers: {
            //   Authorization: `Bearer ${localStorage.getItem('token')}`,
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwMTIwMzc4LCJpYXQiOjE3MzAxMTMxNzgsImp0aSI6IjZmMmNhNzNiYjc0ZjQ1YTdhMDBmNDMxYTVhODU1ZTc4IiwidXNlcl9pZCI6MX0.GXs60rn_z_B6QIT8wtQ_x9YDdggRoJJ6ArJnitfbrJA',
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
  
    // Update Quantity
    const handleQuantityChange = async (itemId, newQuantity) => {
      if (newQuantity < 1) return; // Prevent negative quantities
  
      try {
        const response = await axios.patch(
          `https://your-api-endpoint/cart/items/${itemId}/`,
          { quantity: newQuantity },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setCart(response.data); // Update cart state
      } catch (error) {
        console.error('Error updating quantity:', error);
        alert('Failed to update quantity.');
      }
    };
  
    // Remove Item from Cart
    const handleRemoveItem = async (itemId) => {
      try {
        const response = await axios.delete(
          `https://your-api-endpoint/cart/items/${itemId}/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setCart(response.data); // Update cart state
      } catch (error) {
        console.error('Error removing item:', error);
        alert('Failed to remove item.');
      }
    };
  
    if (loading) return <p>Loading cart...</p>;
    if (!cart) return <p>No items in your cart.</p>;
  
    const totalAmount = cart.items.reduce((sum, item) => sum + parseFloat(item.cart_total), 0);
  
    return (
      <div className="cart-container">
        <div className="cart-items">
          {cart.items.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.variant}</h3>
              <p>Price: ₹{parseFloat(item.price).toLocaleString()}</p>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
                Remove
              </button>
              <p>Total: ₹{parseFloat(item.cart_total).toLocaleString()}</p>
            </div>
          ))}
        </div>
  
        <div className="price-details">
          <h2>Price Details</h2>
          <p>Price ({cart.items.length} item{cart.items.length > 1 ? 's' : ''}): ₹{totalAmount.toLocaleString()}</p>
          <p>Delivery Charges: ₹40</p>
          <h3>Total Amount: ₹{(totalAmount + 40).toLocaleString()}</h3>
          <p>You will save ₹13,401 on this order</p>
          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
    );
  };
  
  export default Cart;