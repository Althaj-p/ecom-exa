import ProductDisplay from '../components/Products';
import MainLayout from './MainLayout';
import Category from '../components/Category';
import ProductDetail from '../components/DetailPage';
export default function ProductDetailPage() {
    // const product = {
    //     name: 'Product Name',
    //     description: 'This is a great product that you will love.',
    //     price: 99.99,
    //     imageUrl: 'https://via.placeholder.com/400',
    //     category: 'Category Name',
    //     stockStatus: 'In Stock',
    //     reviews: [
    //       {
    //         reviewerName: 'John Doe',
    //         date: '2024-08-18',
    //         comment: 'Amazing product! Highly recommend it.',
    //       },
    //     ],
    //     features: ['Feature 1', 'Feature 2', 'Feature 3'],
    //   };
    const product = {
        name: 'Product Name',
        description: 'This is a great product that you will love.',
        price: 99.99,
        images: [
          'https://via.placeholder.com/400/0000FF',
          'https://via.placeholder.com/400/FF0000',
          'https://via.placeholder.com/400/00FF00',
        ],
        category: 'Category Name',
        stockStatus: 'In Stock',
        reviews: [
          {
            reviewerName: 'John Doe',
            date: '2024-08-18',
            comment: 'Amazing product! Highly recommend it.',
          },
        ],
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        variants: [
          { id: 1, name: 'Variant 1' },
          { id: 2, name: 'Variant 2' },
          { id: 3, name: 'Variant 3' },
        ],
        availableQuantity: 5,
    };
    
          
    return (
        <MainLayout>
            <Category/>
            <ProductDetail product={product} />
        </MainLayout>
    )
}