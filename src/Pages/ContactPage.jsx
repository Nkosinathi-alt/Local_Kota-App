import React from "react";

function ContactPage() {
  const Contact = React.lazy(() => import("../Components/ContactForm"));
  return (
    <div style={{ padding: 20 }}>
      <h2>Contact</h2>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </React.Suspense>
    </div>
  );
}
export default ContactPage;
