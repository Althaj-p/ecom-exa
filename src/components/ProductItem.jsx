// import { Link, useNavigate } from "react-router-dom";
// import constants from "../data/constants";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   IconButton,
// } from "@mui/material";
// import { Rating, Tooltip } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import axios from "axios";
// import { useState,useEffect } from "react";

// export default function ProductItem({ product, isLoggedIn=true }) {
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [wishlist, setWishlist] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/cart/wishlist/',{
//             headers:{
//                 Authorization:`Bearer ${localStorage.getItem('accessToken')}`,
//             }
//         });
//         if (response.data.status === 1) {
//           setWishlist(response.data.items);
//         } else {
//           console.error("Wishlist not found");
//         }
//       } catch (error) {
//         console.error("Error fetching wishlist:", error);
//       }
//     };
  
//     fetchWishlist();
//   }, []);

//   const truncateText = (text, limit) => {
//     if (text.length <= limit) return text;
//     return `${text.slice(0, limit)}...`;
//   };

//   const calculateDiscount = (discountedPrice, originalPrice) => {
//     return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
//   };

//   const handleWishlistToggle = async (event) => {
//     // Prevent navigation to the detail page
//     event.stopPropagation();
  
//     // Redirect to login if user is not logged in
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }
  
//     try {
//       // Toggle wishlist status optimistically
//       const newWishlistState = !isWishlisted;
//       setIsWishlisted(newWishlistState);
  
//       // Select API endpoint and method based on the current wishlist status
//       const endpoint = newWishlistState 
//         ? "http://127.0.0.1:8000/api/cart/wishlist/add"
//         : "http://127.0.0.1:8000/api/cart/wishlist/delete";
  
//       const method = newWishlistState ? "post" : "delete";
  
//       // Make the API call to add or remove the product from wishlist
//       const response = await axios({
//         url: endpoint,
//         method,
//         data: {
//           product_id: product.id, // Use `product_id` for `POST` request payload
//         },
//         headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
//         params: method === "delete" ? { product_id: product.id } : {}, // For `DELETE`, use query param
//       });
  
//       // Check response and update isWishlisted state if needed
//       if (response.data.status === 1) {
//         setIsWishlisted(newWishlistState);
//       } else {
//         // Revert the state if the operation failed
//         setIsWishlisted(isWishlisted);
//       }
//     } catch (error) {
//       console.error("Failed to update wishlist:", error);
//       // Revert state if the request fails
//       setIsWishlisted(isWishlisted);
//     }
//   };

//   return (
//     <Card
//       sx={{
//         boxShadow: 1,
//         borderRadius: 2,
//         transition: "transform 0.3s, box-shadow 0.3s",
//         "&:hover": {
//           transform: "scale(1.05)",
//           boxShadow: 6,
//         },
//       }}
//     >
//       <Link to={`/product-detail/${product.slug}`} style={{ textDecoration: "none" }}>
//         <CardMedia
//           component="img"
//           height="170"
//           image={
//             product.variant_images?.length > 0
//               ? `${constants.port}${product.variant_images[0].image}`
//               : "https://via.placeholder.com/300x200"
//           }
//           alt={product.variant_name || "Product Image"}
//           sx={{ borderRadius: "8px 8px 0 0",objectFit:'contain',width:"100%" }}
//         />
//       </Link>
//       <CardContent>
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
//           <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mb: 1,minHeight:63 }}>
//             {truncateText(product.product.name, 30)}
//           </Typography>

//           {/* Add to Wishlist Icon */}
//           <Tooltip title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}>
//             <IconButton onClick={handleWishlistToggle} color={isWishlisted ? "error" : "default"}>
//               <FavoriteIcon />
//             </IconButton>
//           </Tooltip>
//         </Box>

//         {(product.primary_varient || product.secondary_varient) && (
//           <Typography variant="body2" color="text.primary" mb={1}>
//             {product.primary_varient?.value} {product.primary_varient?.varient_type}
//             {product.secondary_varient && (
//               <> | {product.secondary_varient.value} {product.secondary_varient.varient_type}</>
//             )}
//           </Typography>
//         )}

//         <Typography variant="body2" color="text.secondary" mb={1} minHeight={40}>
//           {truncateText(product.product.description, 50)}
//         </Typography>

//         <Box display="flex" alignItems="center" mb={1}>
//           {product.discount_price && (
//             <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
//               RS {product.price}
//             </Typography>
//           )}
//           {product.discount_price && (
//             <Typography variant="body2" color="error" sx={{ ml: 1, fontWeight: "bold" }}>
//               {calculateDiscount(product.discount_price, product.price)}% OFF
//             </Typography>
//           )}
//         </Box>

//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
//           <Typography variant="h6" color="primary">
//             RS {product.discount_price ? product.discount_price : product.price}
//           </Typography>

//           <Box display="flex" alignItems="center">
//             <Rating
//               name="product-rating"
//               value={product.product.average_rating || 0}
//               precision={0.5}
//               readOnly
//               sx={{ fontSize: 18, color: "#ffb400" }}
//             />
//             <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
//               ({product.product.review_count || 0})
//             </Typography>
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// }
import { Link, useNavigate } from "react-router-dom";
import constants from "../data/constants";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    IconButton,
} from "@mui/material";
import { Rating, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProductItem({ product, isLoggedIn = true }) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { user } = useContext(AuthContext);
    const isAuthenticated = !!user;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWishlistStatus = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/cart/wishlist/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });

                if (response.data.status === 1) {
                    // Check if product is in the wishlist
                    const isProductWishlisted = response.data.items.some(
                        (item) => item.product_varient_id === product.id
                    );
                    setIsWishlisted(isProductWishlisted);
                } else {
                    console.error("Wishlist not found");
                }
            } catch (error) {
                console.error("Error fetching wishlist:", error);
            }
        };
        if (isAuthenticated) {

            fetchWishlistStatus();
        }
    }, [product.id, isAuthenticated]);

    const handleWishlistToggle = async (event) => {
        event.stopPropagation();

        if (!isLoggedIn) {
            navigate("/login");
            return;
        }

        try {
            const newWishlistState = !isWishlisted;
            console.log(newWishlistState, 'new')
            setIsWishlisted(newWishlistState);

            const endpoint = newWishlistState
                ? "http://127.0.0.1:8000/api/cart/wishlist/add"
                : "http://127.0.0.1:8000/api/cart/wishlist/delete";

            const method = newWishlistState ? "post" : "delete";

            const response = await axios({
                url: endpoint,
                method,
                data: { product_id: product.id },
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                params: method === "delete" ? { product_id: product.id } : {},
            });

            if (response.data.status !== 1) {
                setIsWishlisted(isWishlisted); // Revert if the operation fails
            }
        } catch (error) {
            console.error("Failed to update wishlist:", error);
            setIsWishlisted(isWishlisted);
        }
    };
    const truncateText = (text, limit) => {
        if (text.length <= limit) return text;
        return `${text.slice(0, limit)}...`;
    };

    const calculateDiscount = (discountedPrice, originalPrice) => {
        return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
    };

    return (
        <Card
            sx={{
                boxShadow: 1,
                borderRadius: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                },
            }}
        >
            <Link to={`/product-detail/${product.slug}`} style={{ textDecoration: "none" }}>
                <CardMedia
                    component="img"
                    height="170"
                    image={
                        product.variant_images?.length > 0
                            ? `${constants.port}${product.variant_images[0].image}`
                            : "https://via.placeholder.com/300x200"
                    }
                    alt={product.variant_name || "Product Image"}
                    sx={{ borderRadius: "8px 8px 0 0", objectFit: "contain", width: "100%" }}
                />
            </Link>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mb: 1, minHeight: 63 }}>
                        {truncateText(product.product.name, 30)}
                    </Typography>

                    <Tooltip title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}>
                        <IconButton onClick={handleWishlistToggle} color={isWishlisted ? "error" : "default"}>
                            <FavoriteIcon />
                        </IconButton>
                    </Tooltip>
                </Box>

                {(product.primary_varient || product.secondary_varient) && (
                    <Typography variant="body2" color="text.primary" mb={1}>
                        {product.primary_varient?.value} {product.primary_varient?.varient_type}
                        {product.secondary_varient && (
                            <> | {product.secondary_varient.value} {product.secondary_varient.varient_type}</>
                        )}
                    </Typography>
                )}
                <Typography variant="body2" color="text.secondary" mb={1} minHeight={40}>
                    {truncateText(product.product.description, 50)}
                </Typography>
                <Box display="flex" alignItems="center" mb={1} minHeight={20}>
                    {product.discount_price && (
                        <>
                            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
                                RS {product.price}
                            </Typography>

                            <Typography variant="body2" color="error" sx={{ ml: 1, fontWeight: "bold" }}>
                                {calculateDiscount(product.discount_price, product.price)}% OFF
                            </Typography>
                        </>
                    )}
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="h6" color="primary">
                        RS {product.discount_price ? product.discount_price : product.price}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Rating
                            name="product-rating"
                            value={product.product.average_rating || 0}
                            precision={0.5}
                            readOnly
                            sx={{ fontSize: 18, color: "#ffb400" }}
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                            ({product.product.review_count || 0})
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
