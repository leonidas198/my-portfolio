
import { Chatbot } from '../chat/Chatbot';
import { Header, Footer } from './index';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="animated-gradient absolute inset-0 -z-10" />

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 py-8">
          <Outlet />
        </main>
        <Chatbot/>
        <Footer />
      </div>
    </div>
  )
}
