import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ProductDetail from '../components/DetailPage';
import { useParams } from 'react-router-dom';
import { CircularProgress, Box, Typography } from '@mui/material';
import { Api } from '../data/Api';
import { AuthContext } from '../context/AuthContext';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext); 
  const isAuthenticated = !!user; 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${Api.products}/${slug}`);
        setProduct(response.data);
      } catch (error) {
        setError('Failed to load product data!');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  // Update recently viewed products only if the user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      axios.post(
        `${Api.recentlyViewed}`,
        { product_slug: slug },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      ).catch((error) => {
        console.error('Error updating recently viewed products:', error);
      });
    }
  }, [isAuthenticated, slug]);

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
