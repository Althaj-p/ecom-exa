import { Typography,Button,Card,Grid,Divider,Box } from "@mui/material";
const PriceDetails = () => (
    <Grid item xs={12} md={4}>
      <Card sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Price Details
        </Typography>
        <Divider />
        <Box sx={{ marginTop: 2 }}>
          <Typography>Price 2 items: ₹2000</Typography>
          <Typography>Delivery Charges: ₹40</Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Total Amount: ₹2000
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
  );

  export default PriceDetails;