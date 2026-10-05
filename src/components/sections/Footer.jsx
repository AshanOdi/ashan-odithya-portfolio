import { site } from "../../data/site.js";
import "./footer.css";

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];

export default function Footer() {
  // Always the current year, so the copyright never goes out of date.
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="footer-logo" href="#top" aria-label="Back to top">
          ASH<span>.</span>
        </a>

        <ul className="footer-socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© {year} {site.name}. All rights reserved.</p>
        <p>
          Built with React and Vite <span aria-hidden="true">·</span>{" "}
          <a href="#top">Back to top ↑</a>
        </p>
      </div>
    </footer>
  );
}
