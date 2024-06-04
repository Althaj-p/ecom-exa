import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetail';
import MainLayout from './pages/MainLayout';

function App() {
  return (
    <>
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/product-detail' element={<ProductDetailPage/>}/>
        </Routes>
      </BrowserRouter>
      </MainLayout>
    </>
  );
}

export default App;
