
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/project";
import Resume from "../components/resume";

export default function HomePage(){
    return(
        <>
        {/* <Navbar/> */}
        <Header/>
        <Hero/>
       <About/>
       <Resume/>
       <Projects/>
       <Contact/>
       <Footer/> 
      
        </>
    )
}