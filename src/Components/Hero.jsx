import React from "react";

// If you use the uploaded path directly during development, replace the import
// with const heroSrc = '/mnt/data/A_website_homepage_screenshot_for_a_South_African_.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          DELICIOUS
          <br />
          KOTA
        </h1>
        <p className="muted">South African Fast Food • Made fresh every day</p>
        <a href="/menu" className="btn">
          Order Now
        </a>
      </div>
      <div className="hero-right">
        <img src="/images/Hero_3.png" alt="Kota hero" className="hero-img" />
      </div>
    </section>
  );
}
