import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} KOTA — Fresh & Fast</div>
      <div className="muted">Open daily • Fresh ingredients</div>
    </footer>
  );
}
