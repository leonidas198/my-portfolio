import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Auto scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const loadingMessage = { role: "assistant", content: "", isLoading: true };

    sendPlaySound();

  // Mostrar mensaje del usuario y burbuja de "escribiendo..."
  setMessages((prev) =>  [...prev, userMessage, loadingMessage]);
  setInput("");

  try {
    const response = await axios.post("http://localhost:3001/chat", {
      message: input,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const botMessage = { role: "assistant", content: response.data.reply };

    playSound();

    // Reemplazar el mensaje "Escribiendo..." con la respuesta real
    setMessages((prev) => {
      const msgs = [...prev];
      const idx = msgs.findIndex((msg) => msg.isLoading);
      if (idx !== -1) msgs[idx] = botMessage;
      return msgs;
    });
  } catch (error) {
    console.error("Error:", error);
    setMessages((prev) => {
      const msgs = [...prev];
      msgs[msgs.length - 1] = {
        role: "assistant",
        content: "Ups, hubo un error al responder.",
      };
      return msgs;
    });
  };
  
};
const TypingAnimation = () => {
  return (
    <div className="flex gap-1 items-center">
      <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:0.1s]"></span>
      <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
      <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:0.3s]"></span>
    </div>
  );
};


const playSound = () => {
  const audio = new Audio("/sounds/ping.mp3");
  audio.play();
};

const sendPlaySound = () => {
  const audio = new Audio("/sounds/send.mp3");
  audio.play();
}

  return (
    <>
      {/* Burbuja flotante */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-black rounded-full p-4 shadow-lg hover:bg-blue-700"
          aria-label="Abrir chat"
        >
          💬
        </button>
      )}

      {/* Ventana de chat */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 max-w-full bg-white rounded-lg shadow-lg flex flex-col z-50 max-h-[80vh]">
          <header className="bg-blue-600 text-black p-3 rounded-t-lg flex justify-between items-center">
            <h2 className="font-bold">Chatbot</h2>
            <button
              onClick={() => {
              setOpen(false);
              setMessages([]); // Vacía la conversación
            }}
            >
            &times;             
            </button>
          </header>

          <div className="flex-1 p-3 overflow-y-auto h-64 bg-gray-100">
            {messages.length === 0 && (
              <p className="text-gray-500 text-sm">
                ¡Hola! Soy el asistente personal de Enrique, te contaré lo que sé de el.
              </p>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 max-w-[80%] ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-600 text-black"
                    : "mr-auto bg-gray-400 border"
                } p-2 rounded-lg shadow`}
              >
                {msg.isLoading ? <TypingAnimation /> : msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex p-3 border-t"
          >
            <input
              type="text"
              className="flex-1 border rounded-l px-3 py-2 focus:outline-none text-black"
              placeholder="Escribí tu pregunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};
