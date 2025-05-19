
import { Link } from 'react-router-dom';
import "./Header.css";


export const Header = () => {
  return (
    <header className="relative text-white shadow-md overflow-hidden">
      <div className="animated-gradient absolute inset-0 -z-10" />

      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-400 transition">Mi Portfolio</Link>
        </h1>

        <nav className="flex space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-400 transition">Inicio</Link>
          <Link to="/projects" className="hover:text-yellow-400 transition">Proyectos</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contacto</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">Sobre mí</Link>
        </nav>
      </div>
    </header>
  );
}
