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

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Grid container spacing={2} p={5}>
      <Grid item xs={12} sm={4} md={3}>
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
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
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
                  <p>Rs 899</p>
                </CardContent>
                <Button variant="contained" color="primary" sx={{ margin: 2 }}>
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
// import React from "react";
// import { Grid, Card, CardMedia, CardContent, Typography, Button, IconButton, Badge } from "@mui/material";
// import { FavoriteBorder, Star, LocalOffer } from "@mui/icons-material";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 1",
//     rating: 4,
//     stock: 20,
//     badge: "New",
//     offer: "10% Off"
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 2",
//     rating: 5,
//     stock: 15,
//     badge: "Bestseller",
//     offer: "Buy One Get One"
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 3",
//     rating: 3,
//     stock: 0,
//     badge: "Limited Stock",
//     offer: "20% Off"
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 4",
//     rating: 2,
//     stock: 30,
//     badge: "Discounted",
//     offer: "15% Off"
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 5",
//     rating: 4,
//     stock: 25,
//     badge: "Top Rated",
//     offer: "5% Off"
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     image: "https://via.placeholder.com/300x200",
//     description: "Description of Product 6",
//     rating: 5,
//     stock: 10,
//     badge: "Popular",
//     offer: "10% Off"
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
//           {/* Add filter options here */}
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
//                     {product.name}{" "}
//                     <Badge badgeContent={product.badge} color="primary" sx={{ ml: 1 }} />
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.description}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Rating:{" "}
//                     {[...Array(5)].map((_, index) => (
//                       <Star key={index} color={index < product.rating ? "primary" : "disabled"} />
//                     ))}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Stock: {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Offer: {product.offer}
//                   </Typography>
//                   <Typography variant="h5" color="black" component="p">
//                     Rs 899
//                   </Typography>
//                 </CardContent>
//                 <IconButton aria-label="add to wishlist" sx={{ position: "absolute", top: 8, right: 8 }}>
//                   <FavoriteBorder />
//                 </IconButton>
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
