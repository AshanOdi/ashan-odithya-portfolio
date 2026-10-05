import { useEffect, useState } from "react";
import "./navbar.css";

// Each link scrolls to the section with the matching id on the page.
const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  // true once the page is scrolled down a little; used to style the bar.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // set the right state if the page loads already scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "nav is-scrolled" : "nav"}>
      <nav className="nav-inner" aria-label="Main">
        <a className="nav-logo" href="#top" aria-label="ASH, back to top">
          ASH<span className="nav-logo-dot">.</span>
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
    </header>
  );
}
