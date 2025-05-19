

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>&copy; {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>

        <div className="flex space-x-4">
          <a href="https://github.com/leonidas198" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/leónidas-enrique-chavez" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="mailto:enriquechavez1982@hotmail.com" className="hover:text-white transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
