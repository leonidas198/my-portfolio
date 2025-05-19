
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/index';
import { Home, About, Projects, Contact } from '../pages/index';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "", element: <Home/> },
            { path: "projects", element: <Projects/> },
            { path: "contact", element: <Contact/> },
            { path: "about", element: <About/> },
        ]
    }
]) 

