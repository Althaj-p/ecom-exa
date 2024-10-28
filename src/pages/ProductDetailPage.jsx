// import ProductDetail from '../components/DetailPage';
// import { useEffect ,useState } from 'react';
// import constants from '../data/constants';
// import axios from 'axios';
// import { Api } from '../data/Api'
// import { useParams } from 'react-router-dom';
// export default function ProductDetailPage() {
//   const {slug} = useParams();
//   const [productw,setProduct] = useState({})
//   useEffect = () => {
//     axios.get(`Api.products/${slug}/`).then((res)=>setProduct(res.data)).catch((error) => console.error('failed to get response',error))
//   }
//     const product = {
//         name: 'Product Name',
//         description: 'This is a great product that you will love.',
//         price: 99.99,
//         images: [
//           'https://via.placeholder.com/400/0000FF',
//           'https://via.placeholder.com/400/FF0000',
//           'https://via.placeholder.com/400/00FF00',
//         ],
//         category: 'Category Name',
//         stockStatus: 'In Stock',
//         reviews: [
//           {
//             reviewerName: 'John Doe',
//             date: '2024-08-18',
//             comment: 'Amazing product! Highly recommend it.',
//           },
//         ],
//         features: ['Feature 1', 'Feature 2', 'Feature 3'],
//         variants: [
//           { id: 1, name: 'Variant 1' },
//           { id: 2, name: 'Variant 2' },
//           { id: 3, name: 'Variant 3' },
//         ],
//         availableQuantity: 5,
//     };
    
          
//     return (
//       <>
//         {/* // <MainLayout> */}
//             {/* <Category/> */}
//             <ProductDetail product={product} />
//         {/* // </MainLayout> */}
//         </>
//     )
// } 

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetail from '../components/DetailPage';
import { useParams } from 'react-router-dom';
import { CircularProgress, Box, Typography } from '@mui/material';
import constants from '../data/constants';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/samsung-s23a2cba5a2-1/')
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load product data.');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center" mt={4}>
        {error}
      </Typography>
    );
  }

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
