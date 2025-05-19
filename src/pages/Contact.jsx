

import { useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact`, form);
      setStatus("Mensaje enviado correctamente ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Hubo un error al enviar el mensaje ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4 bg-[rgba(81,100,109,0.43)] shadow rounded">
      <input
        type="text"
        placeholder="Ingresá tu nombre"
        className="w-full border p-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Ingresá tu email"
        className="w-full border p-2"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Escribí tu mensaje o consulta..."
        className="w-full border p-2"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Enviar
      </button>
      {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
    </form>
  );
};
