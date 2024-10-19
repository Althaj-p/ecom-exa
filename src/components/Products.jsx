// import React from "react";
// import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 1",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 2",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 3",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 3",
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 3",
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 3",
//   },
// ];

// export default function ProductDisplay() {
//   return (
//     <Grid container spacing={2} p={5}>
//       {products.map((product) => (
//         <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
//           <Card>
//             <CardMedia
//               component="img"
//               height="200"
//               image={product.image}
//               alt={product.name}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {product.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {product.description}
//               </Typography>
//               {/* <Typography variant="h5" color="black"component="p">
//                 Rs 899
//               </Typography> */}
//               <p>Rs 899</p>
//             </CardContent>
//             <Button variant="contained" color="primary" sx={{margin:2}}>
//               Add to Cart
//             </Button>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
// import React from "react";
// import { Grid, Card, CardMedia, CardContent, Typography, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 1",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 2",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 3",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 4",
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 5",
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 6",
//   },
// ];

// export default function ProductDisplay() {
//   return (
//     <Grid container spacing={2} p={5}>
//       <Grid item xs={12} sm={4} md={3}>
//         <Card sx={{ padding: 2 }}>
//           <Typography variant="h6" gutterBottom>
//             Filters
//           </Typography>
//           <FormGroup>
//             <FormControlLabel control={<Checkbox />} label="Category 1" />
//             <FormControlLabel control={<Checkbox />} label="Category 2" />
//             <FormControlLabel control={<Checkbox />} label="Category 3" />
//             <FormControlLabel control={<Checkbox />} label="Category 4" />
//             <FormControlLabel control={<Checkbox />} label="Category 5" />
//           </FormGroup>
//         </Card>
//       </Grid>
//       <Grid item xs={12} sm={8} md={9}>
//         <Grid container spacing={2}>
//           {products.map((product) => (
//             <Grid key={product.id} item xs={12} sm={6} md={4}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={product.image}
//                   alt={product.name}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {product.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.description}
//                   </Typography>
//                   <p>Rs 899</p>
//                 </CardContent>
//                 <Button variant="contained" color="primary" sx={{ margin: 2 }}>
//                   Add to Cart
//                 </Button>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material";
import { useEffect,useState } from "react";
import Axios from "axios";
import { Api } from "../data/Api";
import constants from "../data/constants";
import { Link } from "react-router-dom";
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
    description: "Description of Product 4",
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://via.placeholder.com/300x200",
    description: "Description of Product 5",
  },
  {
    id: 6,
    name: "Product 6",
    image: "https://via.placeholder.com/300x200",
    description: "Description of Product 6",
  },
];

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

  return (
    <Grid container spacing={2} p={5}>
      {/* <Grid item xs={12} sm={4} md={3}>
        <Card sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>
          <FormGroup>
            <Typography variant="subtitle1">Categories</Typography>
            <FormControlLabel control={<Checkbox />} label="Category 1" />
            <FormControlLabel control={<Checkbox />} label="Category 2" />
            <FormControlLabel control={<Checkbox />} label="Category 3" />
            <FormControlLabel control={<Checkbox />} label="Category 4" />
            <FormControlLabel control={<Checkbox />} label="Category 5" />
            
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              sx={{ width: '90%', ml: 2 }}
            />
            
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Offers</Typography>
            <FormControlLabel control={<Checkbox />} label="On Sale" />
            <FormControlLabel control={<Checkbox />} label="Buy One Get One" />
            
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Discount</Typography>
            <FormControlLabel control={<Checkbox />} label="10% or more" />
            <FormControlLabel control={<Checkbox />} label="20% or more" />
            <FormControlLabel control={<Checkbox />} label="30% or more" />
            
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Availability</Typography>
            <FormControlLabel control={<Checkbox />} label="In Stock" />
            <FormControlLabel control={<Checkbox />} label="Out of Stock" />
          </FormGroup>
        </Card>
      </Grid> */}
      <Grid item xs={12} sm={8} md={9}>
        <Grid container spacing={2}>
          {products && products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Link to={`/product-detail/${product.slug}`}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={`${constants.port}${product.variant_images[0].image}`}
                  alt={product.variant_name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.product.name}-{product.variant_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.product.description}
                  </Typography>
                  <p>{product.price}</p>
                </CardContent>
                <Button variant="contained" color="primary" sx={{ margin: 2 }}>
                  Add to Cart
                </Button>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}