import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CategoriesPage from './pages/CategoriesPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CollectionPage from './pages/CollectionPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import Products from './pages/admin/Products';
import Orders from './pages/admin/Orders';
import Settings from './pages/admin/Settings';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyOrdersPage from './pages/MyOrdersPage';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import productsData from './data/products'; // Import the products array

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(productsData); // Use the imported products array

  const handleAddToCart = (product, size, color) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id && item.size === size && item.color === color
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, size, color, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, size, color, quantity) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter(
          (item) =>
            !(item.id === id && item.size === size && item.color === color)
        );
      }
      return prevCart.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      );
    });
  };

  const handleRemoveFromCart = (id, size, color) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<Products products={products} setProducts={setProducts} />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/settings" element={<Settings />} />
        
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Private Routes */}
        <Route path="/myorders" element={<PrivateRoute><MyOrdersPage /></PrivateRoute>} />
        <Route path="/checkout" element={<PrivateRoute><CheckoutPage cart={cart} clearCart={clearCart} /></PrivateRoute>} />

        {/* Default Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage products={products} />} /> {/* Add the SearchPage route */}

        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
              <main className="flex-grow">
                <Routes>
                  <Route
                    path="/home"
                    element={<HomePage products={products} onAddToCart={handleAddToCart} />}
                  />
                  <Route
                    path="/shop"
                    element={<ShopPage products={products} onAddToCart={handleAddToCart} />}
                  />
                  <Route path="/categories" element={<CategoriesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route
                    path="/cart"
                    element={
                      <CartPage
                        cart={cart}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemoveFromCart={handleRemoveFromCart}
                      />
                    }
                  />
                  <Route 
                    path="/order-confirmation" 
                    element={<OrderConfirmationPage />} 
                  />
                  <Route
                    path="/product/:productId"
                    element={
                      <ProductDetailsPage
                        products={products}
                        onAddToCart={handleAddToCart}
                      />
                    }
                  />
                  <Route
                    path="/collection/:category"
                    element={
                      <CollectionPage
                        products={products}
                        onAddToCart={handleAddToCart}
                      />
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;