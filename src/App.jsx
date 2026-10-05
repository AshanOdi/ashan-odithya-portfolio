import Navbar from "./components/sections/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import BentoSection from "./components/sections/BentoSection.jsx";

// Sections will be added here step by step:
// Projects, Experience, Contact, Footer
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <BentoSection />
      </main>
    </>
  );
}
