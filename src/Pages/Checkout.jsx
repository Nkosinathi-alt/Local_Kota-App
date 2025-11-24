import React, { useState } from "react";
import { useCart } from "../Context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");

  const total = cart.reduce((s, i) => s + i.qty * i.price, 0);

  const place = (e) => {
    e.preventDefault();
    if (!name || !phone || !addr) return alert("Please fill all fields");

    const orders = JSON.parse(localStorage.getItem("kota_orders") || "[]");
    const order = {
      id: Date.now(),
      name,
      phone,
      addr,
      items: cart,
      total,
    };

    orders.push(order);
    localStorage.setItem("kota_orders", JSON.stringify(orders));
    clearCart();

    alert("Order placed! Order #" + order.id);
  };

  return (
    <main className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-wrapper">
        {/* LEFT — FORM */}
        <div className="checkout-card">
          <form onSubmit={place} className="checkout-form">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label>Delivery Address</label>
            <textarea
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
              required
            />

            <button className="checkout-btn">
              Place Order (Pay on Delivery)
            </button>
          </form>
        </div>

        {/* RIGHT — SUMMARY */}
        <div className="checkout-summary-card">
          <h3>Order Summary</h3>

          {cart.length === 0 ? (
            <p className="muted">Cart is empty</p>
          ) : (
            <div>
              {cart.map((c) => (
                <div className="checkout-item" key={c.id}>
                  <span>
                    {c.title} x {c.qty}
                  </span>
                  <span>R {c.qty * c.price}</span>
                </div>
              ))}

              <div className="checkout-total">
                <span>Total:</span>
                <span>R {total}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
