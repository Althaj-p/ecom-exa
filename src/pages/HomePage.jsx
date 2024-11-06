import MainLayout from "./MainLayout"
import Banner from "../components/Banner"
import ProductDisplay from "../components/Products"
import Category from '../components/Category';
import CategorySection from '../components/HomeCategoryItems';
import { useState,useEffect } from "react";
import axios from 'axios';
import PopularProducts from "../components/Home/PopularProducts";
export default function HomePage() {
    const [categoryItems, setCategoryItems] = useState([]);
    const [bannerData, setBannerData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
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

        fetchBanners();
        const fetchPopularProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/popular-varients');
                setPopularProducts(response.data.variants);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };

        fetchPopularProducts();
        
      }, []);
      console.log(popularProducts,'popularproducts')
    return (
        <>
        
            <Category />
            <Banner images={bannerData}/>
            <PopularProducts products={popularProducts}/>
            <CategorySection />
        </>
    )
}