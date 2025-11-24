import React from "react";
import Menu from "../Components/Menu";
import { MENU } from "../Data/Menu";
import { useCart } from "../Context/CartContext";

export default function MenuPage() {
  const { addItem } = useCart();
  return (
    <main>
      <h2 style={{ padding: "20px 0" }}>Full Menu</h2>
      <Menu items={MENU} onAdd={addItem} />
    </main>
  );
}
