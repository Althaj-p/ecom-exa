import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Banner() {
  return (
    <Box sx={{ backgroundColor: 'primary.dark', color: 'white', textAlign: 'center', p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant="body1" gutterBottom>
        We offer amazing products and services.
      </Typography>
      <Button variant="contained" color="secondary">
        Learn More
      </Button>
    </Box>
  );
}
