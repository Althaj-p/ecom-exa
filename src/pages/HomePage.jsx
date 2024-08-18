import MainLayout from "./MainLayout"
import Banner from "../components/Banner"
import ProductDisplay from "../components/Products"
import Category from '../components/Category';
import CategorySection from '../components/HomeCategoryItems';
export default function HomePage() {
    return (
        <MainLayout>
            <Category />
            <Banner />
            <CategorySection />
            <CategorySection />
            <CategorySection />
            <ProductDisplay />
            {/* <h2>Home Page Content Here...</h2> */}
        </MainLayout>
    )
}