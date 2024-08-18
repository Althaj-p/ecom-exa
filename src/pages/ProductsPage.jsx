import ProductDisplay from '../components/Products';
import MainLayout from './MainLayout';
import Category from '../components/Category';
export default function ProductsPage() {
    return (
        <MainLayout>
            <Category/>
            <ProductDisplay />
        </MainLayout>
    )
}