import React from "react";
import WishlistPage from "../components/Wishlist";
export default function WishList(){
    const wishlist = [
        {
          id: 1,
          name: 'Product 1',
          imageUrl: 'https://via.placeholder.com/400',
          category: 'Category 1',
          price: 99.99,
        },
        {
          id: 2,
          name: 'Product 2',
          imageUrl: 'https://via.placeholder.com/400',
          category: 'Category 2',
          price: 79.99,
        },
        {
          id: 3,
          name: 'Product 3',
          imageUrl: 'https://via.placeholder.com/400',
          category: 'Category 3',
          price: 59.99,
        },
      ];
      
    return (
        <>
        <WishlistPage wishlist={wishlist} />;
        </>
    )
}