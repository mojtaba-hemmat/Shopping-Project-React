import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";

// Components
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/products" element={<Store/>} />
          <Route path="/cart" element={<ShopCart/>} />
          <Route path='/*' element={<Navigate to="/homepage"/>}/>
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
