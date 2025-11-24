import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">KOTA</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="cart-indicator">
          🛒 <span className="count">{count}</span>
        </div>
      </div>
    </header>
  );
}
