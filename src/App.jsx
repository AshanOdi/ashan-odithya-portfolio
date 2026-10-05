import Navbar from "./components/sections/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import BentoSection from "./components/sections/BentoSection.jsx";
import Projects from "./components/sections/Projects.jsx";
import Experience from "./components/sections/Experience.jsx";
import Education from "./components/sections/Education.jsx";
import Now from "./components/sections/Now.jsx";

// Sections will be added here step by step:
// Contact, Footer
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <BentoSection />
        <Projects />
        <Experience />
        <Education />
        <Now />
      </main>
    </>
  );
}
