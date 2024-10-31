import React, { useState } from 'react';
import Login from './Login';
import { Stepper, Step, StepLabel, Button, Typography, Box } from '@mui/material';
import AddressSelection from '../components/Address';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment Option'];

function OrderProcess() {
  const [activeStep, setActiveStep] = useState(0);

  // Navigate to the next step
  const handleNext = () => setActiveStep((prev) => prev + 1);

  // Navigate to the previous step
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handlePlaceOrder = () => {
    // Logic to handle final order placement
    alert('Order placed successfully!');
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Login />;
      case 1:
        return <AddressSelection />;
      case 2:
        return <OrderSummary />;
      case 3:
        return <PaymentOptions onPlaceOrder={handlePlaceOrder} />;
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', mt: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 3 }}>
        {renderStepContent(activeStep)}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button 
            disabled={activeStep === 0} 
            onClick={handleBack}
            variant="contained"
          >
            Back
          </Button>

          {activeStep === steps.length - 1 ? (
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          ) : (
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleNext}
            >
              Continue
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

// const Login = () => <Typography>Login Step</Typography>;
const DeliveryAddress = () => <Typography>Delivery Address Step</Typography>;
const OrderSummary = () => <Typography>Order Summary Step</Typography>;
const PaymentOptions = ({ onPlaceOrder }) => (
  <Typography>
    Payment Options Step
    <Button onClick={onPlaceOrder} variant="contained" color="primary" sx={{ mt: 2 }}>
      Confirm Payment & Place Order
    </Button>
  </Typography>
);

export default OrderProcess;
