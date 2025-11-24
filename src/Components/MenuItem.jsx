import React from "react";

export default function MenuItem({ item, onAdd }) {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{item.title}</h3>
        <p className="muted">{item.desc}</p>
        <div className="card-footer">
          <div className="price">R {item.price}</div>
          <button onClick={() => onAdd(item)}>Add</button>
        </div>
      </div>
    </div>
  );
}
