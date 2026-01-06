import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(result.error || "Something went wrong.");
      }
    } catch (err) {
      alert("Server error.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-16 p-10 bg-gray-900 text-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 bg-gray-800 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 bg-gray-800 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 h-32 bg-gray-800 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
