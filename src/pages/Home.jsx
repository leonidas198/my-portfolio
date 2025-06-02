import fotoPerfil from '../assets/img/foto-perfil.jpg';


export const Home = () => {
  return (
    <section className="min-h-[calc(100vh-160px)] flex items-center justify-center px-4">
      <div className="bg-[rgba(81,100,109,0.43)] p-8 rounded-xl text-center max-w-2xl shadow-lg">
        <img
          src={ fotoPerfil }
          alt="Foto personal"
          className="w-40 h-50 mx-auto rounded-full border-4 border-yellow-400 mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">¡Hola! Soy Leónidas Enrique Chávez</h1>
        <p className="text-lg leading-relaxed">
          Estudiante de la carrera "Analista de Sistemas" (Inst. Superior Santo Domingo). Actualmente dedicado al desarrollo de aplicaciones web con enfoque en Backend, SEO y experiencia como diseñador web (Figma, Netlify, Framer y Adobe xD).
        </p>
      </div>
    </section>
  )
}
//bg-blue-400 bg-opacity-300