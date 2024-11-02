import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';
import { Box } from "@mui/material";

export default function MainLayout() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            
            <Box sx={{ flex: '1 0 auto', minHeight: 'calc(100vh - 120px)', p: 3 }}>
                <Outlet />
            </Box>

            <Footer />
        </Box>
    );
}
