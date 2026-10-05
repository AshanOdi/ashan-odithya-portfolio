import Navbar from "./components/sections/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import BentoSection from "./components/sections/BentoSection.jsx";

// Sections will be added here step by step:
// About, Projects, Experience, Contact, Footer
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoSection />
      </main>
    </>
  );
}
