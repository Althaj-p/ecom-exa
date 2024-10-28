import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Checkbox, FormControlLabel, FormGroup, Slider,Box } from "@mui/material";
import { useEffect,useState } from "react";
import Axios from "axios";
import { Api } from "../data/Api";
import constants from "../data/constants";
import { Link } from "react-router-dom";

export default function ProductDisplay() {  
  const [priceRange, setPriceRange] = React.useState([0, 1000]);
  const [products,setProducts] = useState([]);
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  useEffect(()=>{
    console.log(Api.products,'url')
    Axios.get(Api.products).then((res) => {
      if (res.data.status == 1){
        console.log('getitems')
        console.log(res.data)
        setProducts(res.data.variants);
      }else{
        console.log('error')
        // throw new Error(`HTTP error! status: ${res.status}`);
      }
    })
    .catch((error) => {
      console.log('error occured!!')
      // console.error('There was an error!', error.res.status);
    })
  },[])

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return `${text.slice(0, limit)}...`;
  };
  return (
    <Grid container spacing={3} p={5}>
      {products && products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <Link to={`/product-detail/${product.slug}`} style={{ textDecoration: 'none' }}>
            <Card 
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { 
                  transform: 'scale(1.05)', 
                  boxShadow: 6
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={
                  product.variant_images?.length > 0
                    ? `${constants.port}${product.variant_images[0].image}`
                    : "https://via.placeholder.com/300x200"
                }
                alt={product.variant_name || "Product Image"}
                sx={{ borderRadius: '8px 8px 0 0' }}
              />
              <CardContent>
                <Typography 
                  variant="h6" 
                  component="div" 
                  sx={{ fontWeight: 'bold', mb: 1 }}
                >
                  {product.product.name}
                </Typography>
                {(product.primary_varient || product.secondary_varient) && (
                  <Typography variant="body2" color="text.primary" mb={1}>
                    {product.primary_varient?.value} {product.primary_varient?.varient_type}
                    {product.secondary_varient && (
                      <> | {product.secondary_varient.value} {product.secondary_varient.varient_type}</>
                    )}
                  </Typography>
                )}
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  mb={2}
                >
                  {truncateText(product.product.description, 50)}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" color="primary">
                    ₹ {product.price}
                  </Typography>
                  <Button variant="contained" color="secondary" size="small">
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );

}