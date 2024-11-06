// import React from "react";
// import { Grid, Card, CardMedia, CardContent, Typography, Button, Checkbox, FormControlLabel, FormGroup, Slider,Box } from "@mui/material";
// import { useEffect,useState } from "react";
// import Axios from "axios";
// import { Api } from "../data/Api";
// import constants from "../data/constants";
// import { Link } from "react-router-dom";

// export default function ProductDisplay() {  
//   const [priceRange, setPriceRange] = React.useState([0, 1000]);
//   const [products,setProducts] = useState([]);
//   const handlePriceChange = (event, newValue) => {
//     setPriceRange(newValue);
//   };

//   useEffect(()=>{
//     console.log(Api.products,'url')
//     Axios.get(Api.products).then((res) => {
//       if (res.data.status == 1){
//         console.log('getitems')
//         console.log(res.data)
//         setProducts(res.data.variants);
//       }else{
//         console.log('error')
//         // throw new Error(`HTTP error! status: ${res.status}`);
//       }
//     })
//     .catch((error) => {
//       console.log('error occured!!')
//       // console.error('There was an error!', error.res.status);
//     })
//   },[])

//   const truncateText = (text, limit) => {
//     if (text.length <= limit) return text;
//     return `${text.slice(0, limit)}...`;
//   };
//   return (
//     <Grid container spacing={3} p={5}>
//       {products && products.map((product) => (
//         <Grid key={product.id} item xs={12} sm={6} md={3}>
//           <Link to={`/product-detail/${product.slug}`} style={{ textDecoration: 'none' }}>
//             <Card 
//               sx={{
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 '&:hover': { 
//                   transform: 'scale(1.05)', 
//                   boxShadow: 6
//                 },
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={
//                   product.variant_images?.length > 0
//                     ? `${constants.port}${product.variant_images[0].image}`
//                     : "https://via.placeholder.com/300x200"
//                 }
//                 alt={product.variant_name || "Product Image"}
//                 sx={{ borderRadius: '8px 8px 0 0' }}
//               />
//               <CardContent>
//                 <Typography 
//                   variant="h6" 
//                   component="div" 
//                   sx={{ fontWeight: 'bold', mb: 1 }}
//                 >
//                   {product.product.name}
//                 </Typography>
//                 {(product.primary_varient || product.secondary_varient) && (
//                   <Typography variant="body2" color="text.primary" mb={1}>
//                     {product.primary_varient?.value} {product.primary_varient?.varient_type}
//                     {product.secondary_varient && (
//                       <> | {product.secondary_varient.value} {product.secondary_varient.varient_type}</>
//                     )}
//                   </Typography>
//                 )}
//                 <Typography 
//                   variant="body2" 
//                   color="text.secondary" 
//                   mb={2}
//                 >
//                   {truncateText(product.product.description, 50)}
//                 </Typography>
//                 <Box display="flex" justifyContent="space-between" alignItems="center">
//                   <Typography variant="h6" color="primary">
//                     ₹ {product.price}
//                   </Typography>
//                   <Button variant="contained" color="secondary" size="small">
//                     Add to Cart
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Link>
//         </Grid>
//       ))}
//     </Grid>
//   );

// }
// ============================================================
// import React, { useEffect, useState } from "react";
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Slider,
//   Box,
//   Container,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import Axios from "axios";
// import { Link } from "react-router-dom";
// import { Api } from "../data/Api";
// import constants from "../data/constants";

// export default function ProductDisplay() {
//   const [priceRange, setPriceRange] = useState([749, 3620.88]);
//   const [products, setProducts] = useState([]);
//   const [filters, setFilters] = useState({
//     brand: [],
//     printingCapabilities: [],
//     color: [],
//   });

//   const handlePriceChange = (event, newValue) => {
//     setPriceRange(newValue);
//   };

//   const handleFilterChange = (filterCategory, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [filterCategory]: prevFilters[filterCategory].includes(value)
//         ? prevFilters[filterCategory].filter((item) => item !== value)
//         : [...prevFilters[filterCategory], value],
//     }));
//   };

//   useEffect(() => {
//     Axios.get(Api.products)
//       .then((res) => {
//         if (res.data.status === 1) {
//           setProducts(res.data.variants);
//         }
//       })
//       .catch((error) => console.log("Error occurred!", error));
//   }, []);

//   const truncateText = (text, limit) => {
//     if (text.length <= limit) return text;
//     return `${text.slice(0, limit)}...`;
//   };

//   return (
//       <Grid container spacing={3} p={5}>
//         {/* Sidebar Filters */}
//         <Grid item xs={12} md={3}>
//           <Box mb={3}>
//             <Typography variant="h6" gutterBottom>
//               Filters
//             </Typography>
//             <Divider />
//             {/* Brand Filter */}
//             <Typography variant="subtitle1" mt={2} mb={1}>
//               By Brands
//             </Typography>
//             <FormGroup>
//               {["Honeywell", "Zebra"].map((brand) => (
//                 <FormControlLabel
//                   key={brand}
//                   control={
//                     <Checkbox
//                       checked={filters.brand.includes(brand)}
//                       onChange={() => handleFilterChange("brand", brand)}
//                     />
//                   }
//                   label={brand}
//                 />
//               ))}
//             </FormGroup>

//             {/* Printing Capabilities Filter */}
//             <Typography variant="subtitle1" mt={2} mb={1}>
//               By Printing Capabilities
//             </Typography>
//             <FormGroup>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={filters.printingCapabilities.includes(
//                       "Direct Thermal"
//                     )}
//                     onChange={() =>
//                       handleFilterChange("printingCapabilities", "Direct Thermal")
//                     }
//                   />
//                 }
//                 label="Direct Thermal"
//               />
//             </FormGroup>

//             {/* Color Filter */}
//             <Typography variant="subtitle1" mt={2} mb={1}>
//               By Color
//             </Typography>
//             <FormGroup>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={filters.color.includes("Black")}
//                     onChange={() => handleFilterChange("color", "Black")}
//                   />
//                 }
//                 label="Black"
//               />
//             </FormGroup>

//             {/* Price Range Slider */}
//             <Typography variant="subtitle1" mt={2} mb={1}>
//               By Price
//             </Typography>
//             <Slider
//               value={priceRange}
//               onChange={handlePriceChange}
//               valueLabelDisplay="auto"
//               min={749}
//               max={3620.88}
//               sx={{ width: "90%" }}
//             />
//             <Typography variant="body2" align="center">
//               Price: AED {priceRange[0]} - AED {priceRange[1]}
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Product Grid */}
//         <Grid item xs={12} md={9}>
//           <Grid container spacing={3}>
//             {products.map((product) => (
//               <Grid key={product.id} item xs={12} sm={6} md={3}>
//                 <Link to={`/product-detail/${product.slug}`} style={{ textDecoration: "none" }}>
//                   <Card
//                     sx={{
//                       boxShadow: 3,
//                       borderRadius: 2,
//                       transition: "transform 0.3s, box-shadow 0.3s",
//                       "&:hover": {
//                         transform: "scale(1.05)",
//                         boxShadow: 6,
//                       },
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       height="200"
//                       image={
//                         product.variant_images?.length > 0
//                           ? `${constants.port}${product.variant_images[0].image}`
//                           : "https://via.placeholder.com/300x200"
//                       }
//                       alt={product.variant_name || "Product Image"}
//                       sx={{ borderRadius: "8px 8px 0 0" }}
//                     />
//                     <CardContent>
//                       <Typography
//                         variant="h6"
//                         component="div"
//                         sx={{ fontWeight: "bold", mb: 1 }}
//                       >
//                         {product.product.name}
//                       </Typography>
//                       {(product.primary_varient || product.secondary_varient) && (
//                         <Typography variant="body2" color="text.primary" mb={1}>
//                           {product.primary_varient?.value}{" "}
//                           {product.primary_varient?.varient_type}
//                           {product.secondary_varient && (
//                             <>
//                               {" | "}
//                               {product.secondary_varient.value}{" "}
//                               {product.secondary_varient.varient_type}
//                             </>
//                           )}
//                         </Typography>
//                       )}
//                       {/* <Typography variant="body2" color="text.secondary" mb={2}>
//                         {truncateText(product.product.description, 50)}
//                       </Typography> */}
//                       <Box display="flex" justifyContent="space-between" alignItems="center">
//                         <Typography variant="h6" color="primary">
//                           AED {product.price}
//                         </Typography>
//                         {/* <Button variant="contained" color="secondary" size="small">
//                           Add to Cart
//                         </Button> */}
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//   );
// }
// ================================
import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Api } from "../data/Api";
import constants from "../data/constants";

export default function ProductDisplay() {
  const [priceRange, setPriceRange] = useState([749, 3620.88]);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    brand: [],
    printingCapabilities: [],
    color: [],
    category: [],
  });
  const [sortOption, setSortOption] = useState("latest");

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleFilterChange = (filterCategory, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterCategory]: prevFilters[filterCategory].includes(value)
        ? prevFilters[filterCategory].filter((item) => item !== value)
        : [...prevFilters[filterCategory], value],
    }));
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    Axios.get(Api.products)
      .then((res) => {
        if (res.data.status === 1) {
          setProducts(res.data.variants);
        }
      })
      .catch((error) => console.log("Error occurred!", error));
  }, []);

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return `${text.slice(0, limit)}...`;
  };

  const calculateDiscount = (originalPrice, discountedPrice) => {
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  };

  return (
      <Grid container spacing={3} p={5}>
        {/* Sidebar Filters */}
        <Grid item xs={12} md={3}>
          <Box mb={3}>
            <Typography variant="h6" gutterBottom>
              Categories
            </Typography>
            <Divider />
            <List component="nav" aria-label="main categories">
              {["Servers & Components", "Printers & Scanners", "Printer Consumables", "Point of Sale", "Networking Devices", "Security Devices"].map((category) => (
                <ListItem
                  button
                  key={category}
                  onClick={() => handleFilterChange("category", category)}
                  selected={filters.category.includes(category)}
                >
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>

            <Typography variant="subtitle1" mt={2} mb={1}>
              By Brands
            </Typography>
            <FormGroup>
              {["Honeywell", "Zebra"].map((brand) => (
                <FormControlLabel
                  key={brand}
                  control={
                    <Checkbox
                      checked={filters.brand.includes(brand)}
                      onChange={() => handleFilterChange("brand", brand)}
                    />
                  }
                  label={brand}
                />
              ))}
            </FormGroup>

            <Typography variant="subtitle1" mt={2} mb={1}>
              By Price
            </Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={749}
              max={3620.88}
              sx={{ width: "90%" }}
            />
            <Typography variant="body2" align="center">
              Price: AED {priceRange[0]} - AED {priceRange[1]}
            </Typography>
          </Box>
        </Grid>

        {/* Product and Sorting */}
        <Grid item xs={12} md={9}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">
              ID Card Printers
            </Typography>
            <Typography variant="body2">{products.length} Products found</Typography>
            <FormControl variant="outlined" size="small">
              <InputLabel>Sort by</InputLabel>
              <Select value={sortOption} onChange={handleSortChange} label="Sort by">
                <MenuItem value="latest">Sort by latest</MenuItem>
                <MenuItem value="priceLow">Price: Low to High</MenuItem>
                <MenuItem value="priceHigh">Price: High to Low</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={3}>
                <Link to={`/product-detail/${product.slug}`} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      boxShadow: 3,
                      borderRadius: 2,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="170"
                      image={
                        product.variant_images?.length > 0
                          ? `${constants.port}${product.variant_images[0].image}`
                          : "https://via.placeholder.com/300x200"
                      }
                      alt={product.variant_name || "Product Image"}
                      sx={{ borderRadius: "8px 8px 0 0" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: "bold", mb: 1 }}
                      >
                        {truncateText(product.product.name, 30)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={1} minHeight={40}>
                        {truncateText(product.product.description, 50)}
                      </Typography>
                        <Box display="flex" alignItems="center" mb={1}>
                          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                            RS {product.price}
                          </Typography>
                          <Typography variant="body2" color="error" sx={{ ml: 1, fontWeight: 'bold' }}>
                            {calculateDiscount(53000, product.price)}% OFF
                          </Typography>
                        </Box>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6" color="primary">
                          RS {product.price}
                        </Typography>
                        {/* <Button variant="contained" color="secondary" size="small">
                          Add to Cart
                        </Button> */}
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
  );
}
