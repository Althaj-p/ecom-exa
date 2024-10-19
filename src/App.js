// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ProductsPage from './pages/ProductsPage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import MainLayout from './pages/MainLayout';

// function App() {
//   return (
//     <>
//     <MainLayout>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<HomePage/>}/>
//           <Route path='/products' element={<ProductsPage/>}/>
//           <Route path='/product-detail' element={<ProductDetailPage/>}/>
//         </Routes>
//       </BrowserRouter>
//       </MainLayout>
//     </>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import MainLayout from './pages/MainLayout';
import WishList from './pages/WishList';
import Chat from './pages/chatPage1';
import ChatRoom from './pages/chatPage';
import ChatList from './pages/chatlist';

function App() {
  return (
    <BrowserRouter>
      {/* <MainLayout> */}
        <Routes>
          <Route element={<MainLayout/>}>
            <Route index element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/product-detail/:slug' element={<ProductDetailPage />} />
            <Route path='/wish-list' element={<WishList/>}/>
            {/* <Route path='/chat' element={<ChatRoom/>}/> */}
            <Route path="/chat" element={<ChatList />} />
            <Route path="/chat/:roomId" element={<ChatRoom />} />
          </Route>
        </Routes>
      {/* </MainLayout> */}
    </BrowserRouter>
  );
}

export default App;
