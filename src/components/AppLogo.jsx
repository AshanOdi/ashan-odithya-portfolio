import "./app-logo.css";

// Simple geometric placeholder marks, drawn in the current text colour.
const marks = {
  ledger: (
    <g fill="currentColor">
      <rect x="3" y="4" width="18" height="4" rx="2" />
      <rect x="3" y="10" width="12" height="4" rx="2" />
      <rect x="3" y="16" width="15" height="4" rx="2" />
    </g>
  ),
  pulse: (
    <path d="M2 12h4l3-7 4 14 3-7h6" fill="none" stroke="currentColor" strokeWidth="2.4"
      strokeLinecap="round" strokeLinejoin="round" />
  ),
  bubble: (
    <path fill="currentColor"
      d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
  ),
  bag: (
    <g>
      <path fill="currentColor" d="M5 8h14l-1 13H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="2" />
    </g>
  ),
  hex: (
    <g>
      <path fill="currentColor" d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" />
      <path fill="var(--bg)" d="M12 8.5 15 10.2v3.6L12 15.5l-3-1.7v-3.6l3-1.7Z" />
    </g>
  ),
  grid: (
    <g fill="currentColor">
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="4" />
      <rect x="3" y="13" width="8" height="8" rx="4" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </g>
  ),
  ring: (
    <g>
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </g>
  ),
  arrow: <path fill="currentColor" d="M12 2 20.5 21 12 16.5 3.5 21 12 2Z" />,
};

// One logo in the strip: a real logo image if one is given, otherwise a
// placeholder mark + the app name as a wordmark.
export default function AppLogo({ name, mark, logo }) {
  if (logo) {
    return <img className="app-logo-img" src={logo} alt={name} height="32" loading="lazy" />;
  }
  return (
    <span className="app-logo">
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        {marks[mark]}
      </svg>
      {name}
    </span>
  );
}
