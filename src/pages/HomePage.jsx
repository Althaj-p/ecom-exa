import MainLayout from "./MainLayout"
import Banner from "../components/Banner"
import ProductDisplay from "../components/Products"
import Category from '../components/Category';
import CategorySection from '../components/HomeCategoryItems';
import { useState,useEffect } from "react";
import axios from 'axios';
export default function HomePage() {
    const [categoryItems, setCategoryItems] = useState([]);
    const [bannerData, setBannerData] = useState([]);
    const [productData, setProductData] = useState([]);
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
        
        // Fetch product data
        // fetch("API_URL/products")
        //   .then(response => response.json())
        //   .then(data => setProductData(data));
      }, []);
    return (
        <>
        
            <Category />
            <Banner images={bannerData}/>
            <CategorySection />
            <CategorySection />
            <CategorySection />
            <ProductDisplay />
        </>
    )
}