import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home";
import BackToTopButton from "./Components/BackToTopButton";
import ContactForm from "./Pages/Contactus";
import Footer from "./Components/Footer";
import WhySection from "./Components/WhySection";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";
import FilteredProducts from "./Pages/FilteredProducts";
import ProductDetail from "./Pages/ProductDeatils";
import CartSidebar from "./Components/CartSidebar";
import { CartProvider } from "./Context/CartContext";
import Checkout from "./CheckOut/Checkout";

import { useLocation as useRouterLocation } from "react-router-dom";
import ScrollToTop from "./Pages/ScrollToTop";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import ShippingDelivery from "./Pages/ShippingDelivery";

function Layout({ children }) {
  const location = useRouterLocation();
  const hideOnCheckout = location.pathname === "/checkout";

  return (
    <>
      {children}
      {!hideOnCheckout && <WhySection />}
      {!hideOnCheckout && <Footer />}
      <BackToTopButton />
    </>
  );
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/popular" element={<FilteredProducts />} />
            <Route path="/new-arrivals" element={<FilteredProducts />} />
            <Route path="/best-deals" element={<FilteredProducts />} />
            <Route path="/accessories" element={<FilteredProducts />} />
            <Route path="/contactus" element={<ContactForm />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/products/:category/" element={<Products openCart={openCart} />} />
            <Route path="/product/:id" element={<ProductDetail openCart={openCart} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/taerms-condition" element={<TermsAndConditions/>} />
            <Route path="/shipping-delivery" element={<ShippingDelivery/>} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
