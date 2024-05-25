import MainLayout from "./MainLayout"
import Banner from "../components/Banner"
import ProductDisplay from "../components/Products"
export default function HomePage(){
    return(
        <MainLayout>
            <Banner/>
            <ProductDisplay/>
            {/* <h2>Home Page Content Here...</h2> */}
        </MainLayout>
    )
}