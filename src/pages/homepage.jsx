
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/project";
import Resume from "../components/resume";

export default function HomePage(){
    return(
        <>
        <Navbar/>
        <Hero/>
       <About/>
       <Resume/>
       <Projects/>
       <Contact/>
       <Footer/> 
      
        </>
    )
}