import React from "react";
import { useCart } from "../Context/CartContext";

export default function Cart() {
  const { cart, changeQty } = useCart();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <aside className="cart">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p className="muted">Cart empty</p>
      ) : (
        <div>
          {cart.map((it) => (
            <div key={it.id} className="cart-line">
              <div>
                {it.title}{" "}
                <div className="muted">
                  R {it.price} x {it.qty}
                </div>
              </div>
              <div>
                <button onClick={() => changeQty(it.id, -1)}>-</button>
                <button onClick={() => changeQty(it.id, 1)}>+</button>
              </div>
            </div>
          ))}
          <div className="cart-total">Total: R {total}</div>
        </div>
      )}
    </aside>
  );
}
