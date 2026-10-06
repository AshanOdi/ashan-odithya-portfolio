import "./app-logo.css";

// Drawn icons for apps that have no logo file (in the current text colour).
const marks = {
  leaf: (
    <g fill="currentColor">
      <path d="M20 4c-8 0-14 4-14 11 0 1.4.3 2.7.8 3.9C9 13 13 10 17 8.5 13.5 11 10.5 14.5 8.6 20.4 9.6 20.8 10.8 21 12 21c6 0 9-5.5 8-17Z" />
    </g>
  ),
};

// One logo in the strip. See src/data/apps.js for what each field means.
export default function AppLogo({ name, icon, wordmark, label, mark, ash }) {
  if (ash) {
    // This portfolio's own text logo.
    return (
      <span className="app-logo app-logo-ash" aria-label={name}>
        ASH<span>.</span>
      </span>
    );
  }

  return (
    // The visible parts are decoration; aria-label gives the plain name.
    <span className="app-logo" role="img" aria-label={name}>
      {icon && <img className="app-logo-icon" src={icon} alt="" loading="lazy" />}
      {mark && (
        <svg className="app-logo-mark" viewBox="0 0 24 24" aria-hidden="true">
          {marks[mark]}
        </svg>
      )}
      {wordmark && <img className="app-logo-wordmark" src={wordmark} alt="" loading="lazy" />}
      {label && <span className="app-logo-label">{label}</span>}
    </span>
  );
}
