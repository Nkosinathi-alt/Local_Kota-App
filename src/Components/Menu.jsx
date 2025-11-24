import React from "react";
import MenuItem from "./MenuItem";

export default function Menu({ items, onAdd }) {
  return (
    <section className="menu">
      <h2>Menu</h2>
      <div className="menu-grid">
        {items.map((i) => (
          <MenuItem key={i.id} item={i} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
