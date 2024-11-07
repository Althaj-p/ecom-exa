import MainLayout from "./MainLayout"
import Banner from "../components/Banner"
import ProductDisplay from "../components/Products"
import Category from '../components/Category';
import CategorySection from '../components/HomeCategoryItems';
import { useState,useEffect,useContext } from "react";
import axios from 'axios';
import PopularProducts from "../components/Home/PopularProducts";
import RecentProducts from "../components/Home/RecentProducts";
import OfferProducts from "../components/Home/TopOffers";
import ProductGrid from "../components/Home/ProductGrid";
import { AuthContext } from "../context/AuthContext";
import { Api } from '../data/Api';
export default function HomePage() {
    const [categoryItems, setCategoryItems] = useState([]);
    const [bannerData, setBannerData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [recentProducts, setRecentProducts] = useState([]);
    const [offerProducts, setOfferProducts] = useState([]);
    const { user } = useContext(AuthContext); // Access user from AuthContext
    const isAuthenticated = !!user; // Check if user is authenticated
    useEffect(() => {
        // Fetch category items
        // fetch("API_URL/categories")
        //   .then(response => response.json()) 
        //   .then(data => setCategoryItems(data));
          
        // Fetch banner data
        const fetchBanners = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/banners');
                setBannerData(response.data);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };

        const fetchPopularProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/popular-varients');
                setPopularProducts(response.data.variants);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };
        
        // Fetch recent products
        const fetchRecentProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/recently-viewed-variants',{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('accessToken')}`,
                    }
                });
                if (response.data.status === 1) {
                    setRecentProducts(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching recent products:", error);
            }
        };
        const fetchTopOffers = async () => {
            try{
                const response = await axios.get(Api.topOffers);
                if (response.data.status === 1){
                    setOfferProducts(response.data.data);
                }
            }catch (error){
                console.error('Error Fetching Offer Products',error)
            }
        };
        fetchBanners();
        fetchPopularProducts();
        fetchTopOffers();
        if (isAuthenticated){
            fetchRecentProducts();
        }
      }, [isAuthenticated]);
    return (
        <>
        
            <Category />
            <Banner images={bannerData}/>
            <ProductGrid title='Popular Products' products={popularProducts}/>
            <ProductGrid title='Top Offers' products={offerProducts}/>
            <ProductGrid title='Recently Viewed Products' products={recentProducts}/>
            
            {/* <CategorySection /> */}
        </>
    )
}