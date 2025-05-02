
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
   <div>
    <Navbar/>
    <Banner/>
    <About/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Blog/>
    <Contact/>
    <Footer/>
   </div>
   </>
  );
}
