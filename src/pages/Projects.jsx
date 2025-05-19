import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Gestoria",
    video: "/projects/Gestoria.mp4",
    description: "App para recibir consultas, con un formulario con backend y un botón flotante para whatsapp.",
    tech: ["React", "Tailwind", "NodeJS"],
    github: "https://github.com/leonidas198/Gestoria",
    demo: "https://gestoriadigital.vercel.app/",
  },
  {
    title: "Gestor de Tareas",
    video: "/projects/nota.mp4",
    description: "App para gestionar tareas con creación, fotos y notas.",
    tech: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/leonidas198/journal-app",
    demo: "https://journal-app-2.netlify.app/",
  },
  {
    title: "App de gifts",
    video: "/projects/gift.mp4",
    description: "App conectada un APi que devuelve gifts.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/leonidas198/react-gif",
    demo: "https://gif-expert-quique.netlify.app/",
  },
  {
    title: "Portfolio viejo",
    video: "/projects/viejoPortfolio.mp4",
    description: "Primer portfolio creado con JS, html y css.",
    tech: ["JavaScript", "HTML5", "CSS"],
    github: "https://github.com/leonidas198/portfolio",
    demo: "https://portfolio-leonidas-chavez.netlify.app/",
  },
  {
    title: "Juego de blackJack",
    video: "/projects/juego-black-jack.mp4",
    description: "Juego creado solo en JavaScript.",
    tech: ["JavaScript", "HTML5", "CSS"],
    github: "https://github.com/leonidas198/Juego-de-Blackjack",
    demo: "https://juego-blackjack-refactorizated.netlify.app/",
  },
  // ...más proyectos
];


export const Projects = () => {

  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <section className="px-4 py-12 max-w-6xl mx-auto relative">
      <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-[rgba(81,100,109,0.43)] bg-opacity-10 backdrop-blur-md rounded-xl p-6 shadow-md text-gray-800 hover:scale-105 transition-transform duration-300"
          >
            <video
              src={proj.video}
              className="w-full h-40 object-cover rounded-lg mb-4"
              autoPlay
              loop
              muted
              playsInline
              
            />

            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((t, i) => (
                <span key={i} className="bg-yellow-500 text-black px-2 py-1 text-sm rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded shadow">
                  <FaGithub /> GitHub
                </button>
              </a>
              <button
                onClick={() => setActiveDemo(proj.demo)}
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded shadow"
              >
                <FaExternalLinkAlt /> Ver Demo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-4xl h-[80vh] rounded-lg overflow-hidden relative">
            <button
              onClick={() => setActiveDemo(null)}
              className="absolute top-4 right-4 text-black text-xl z-10 hover:text-red-500"
            >
              <FaTimes />
            </button>
            <iframe
              src={activeDemo}
              title="Demo del proyecto"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}
