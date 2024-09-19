import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';  // Import Outlet
export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {/* {children} */}
            <Outlet /> {/* This will render the child components */}
            <Footer />
        </>
    )
}