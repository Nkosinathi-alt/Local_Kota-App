import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("kota_cart");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("kota_cart", JSON.stringify(cart));
  }, [cart]);
  const addItem = (item) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found)
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const changeQty = (id, delta) => {
    setCart((prev) => {
      const next = prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0);
      return next;
    });
  };
  const clearCart = () => setCart([]);

  const value = { cart, addItem, changeQty, clearCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
