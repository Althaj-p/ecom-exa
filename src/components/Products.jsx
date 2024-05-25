import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://via.placeholder.com/300x200",
    description: "Description of Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/300x200",
    description: "Description of Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://via.placeholder.com/300x200",
    description: "Description of Product 3",
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://via.placeholder.com/300x200",
    description: "Description of Product 3",
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://via.placeholder.com/300x200",
    description: "Description of Product 3",
  },
  {
    id: 6,
    name: "Product 6",
    image: "https://via.placeholder.com/300x200",
    description: "Description of Product 3",
  },
];

export default function ProductDisplay() {
  return (
    <Grid container spacing={2} p={5}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
