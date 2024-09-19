import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import MainLayout from './pages/MainLayout';
import WishList from './pages/WishList';

function App() {
  return (
    <>
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/product-detail' element={<ProductDetailPage/>}/>
          <Route path='/wish-list' element={<WishList/>}/>
        </Routes>
      </BrowserRouter>
      </MainLayout>
    </>
  );
}

export default App;
