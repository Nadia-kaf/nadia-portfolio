import { createBrowserRouter } from "react-router-dom";
import About from "./components/about.jsx";
import Projects from "./components/project.jsx";
import Resume from "./components/resume.jsx";
import HomePage from "./pages/homepage.jsx";
import { RouterProvider } from "react-router";
import "./App.css";
import Contact from "./components/contact.jsx";




const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <About/> },
  { path: "/resume", element: <Resume/> },
  { path: "/projects", element: <Projects/> },
  { path: "/contact", element: <Contact/> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
