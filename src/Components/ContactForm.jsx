import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !contact || !msg) return alert("Fill all fields");

    const list = JSON.parse(localStorage.getItem("kota_contacts") || "[]");
    list.push({ id: Date.now(), name, contact, msg });
    localStorage.setItem("kota_contacts", JSON.stringify(list));

    alert("Thanks! We will get back to you soon.");

    setName("");
    setContact("");
    setMsg("");
  };

  return (
    <form onSubmit={submit} className="contact-card">
      <label>Name</label>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Phone or Email</label>
      <input
        placeholder="Enter your contact info"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Your message..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <button className="btn">Send Message</button>
    </form>
  );
}
