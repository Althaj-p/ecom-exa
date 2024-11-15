import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import Login from './Login';
import { Stepper, Step, StepLabel, Button, Typography, Box, Grid } from '@mui/material';
import AddressSelection from '../components/Address';
import OrderSummary from '../components/OrderSummary';
import PaymentOptions from '../components/PaymentOptions';
import PriceDetails from '../components/priceDetail';
import axios from 'axios';
import {Api} from '../data/Api';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment Option'];

function OrderProcess() {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const isAuthenticated = !!user; // Check if user is authenticated
  const [activeStep, setActiveStep] = useState(isAuthenticated ? 1 : 0);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(user,isAuthenticated,'authcheck12')
  console.log(selectedAddress,paymentMethod,'authcheck')

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  // const handlePlaceOrder = async () => {
  //   if (!selectedAddress || !paymentMethod) {
  //     alert("Please select an address and payment method.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     const response = await axios.post(Api.createOrder, {
  //       shipping_address_id: selectedAddress, // Assuming selectedAddress has an ID
  //       payment_method: paymentMethod,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  //       },
  //     }
  //   );
  //     alert('Order placed successfully!');
  //     console.log('Order response:', response.data);
  //     // Optionally, navigate to order confirmation page or clear the form here
  //   } catch (error) {
  //     console.error("Error placing order:", error);
  //     alert("There was an issue placing your order. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handlePlaceOrder = async () => {
    if (!selectedAddress || !paymentMethod) {
      alert("Please select an address and payment method.");
      return;
    }

    try {
      setLoading(true);
      const orderResponse = await axios.post(Api.createOrder, {
        shipping_address_id: selectedAddress,
        payment_method: paymentMethod,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      const orderId = orderResponse.data.order_id;
      alert('Order placed successfully!');

      // Create a Stripe Checkout session for the order
      const checkoutResponse = await axios.post(Api.createCheckoutSession, {
        order_id: orderId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      const { checkout_url } = checkoutResponse.data;
      window.location.href = checkout_url;  // Redirect to Stripe Checkout

    } catch (error) {
      console.error("Error placing order or creating checkout session:", error);
      alert("There was an issue with your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return isAuthenticated ? (
          <Box>
            <Typography variant="h6">Welcome, {user.name || 'User'}!</Typography>
            <Typography variant="body1">Email: {user.email || 'N/A'}</Typography>
          </Box>
        ) : (
          <Login />
        );
      case 1:
        return <AddressSelection selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress}/>;
      case 2:
        return <OrderSummary />;
      case 3:
        return <PaymentOptions paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod}/>;
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', mt: 5, mb: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              onClick={() => {
                // Allow step navigation only to previous steps
                if (index <= activeStep) setActiveStep(index);
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3} sx={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 3 }}>
          <Grid item xs={12} md={8}>
            {renderStepContent(activeStep)}
          </Grid>

          {activeStep !== 0 && <PriceDetails />}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button disabled={activeStep === 0} onClick={handleBack} variant="contained">
            Back
          </Button>

          {activeStep === steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handlePlaceOrder} disabled={loading || !selectedAddress || !paymentMethod}>
              {loading ? 'Placing Order...' : 'Place Order'}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={activeStep === 0 && !isAuthenticated} // Disable if on login step and not authenticated
            >
              Continue
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default OrderProcess;
