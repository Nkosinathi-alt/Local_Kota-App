import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import MenuPage from "./Pages/MenuPage";
import Checkout from "./Pages/Checkout";
import ContactPage from "./Pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
