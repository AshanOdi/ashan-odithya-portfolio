import { Children, useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import "./marquee.css";

// An endless, slowly scrolling row.
// How the loop works: the items are rendered twice, side by side, and the
// whole row slides left by exactly half its width (one copy). At that
// moment the second copy sits where the first one started, so the
// animation restarts without a visible jump.
//
// Props:
//   label        accessible name for the row
//   duration     seconds for one full loop (bigger = slower)
//   interactive  true when items contain buttons/links: shows a pause
//                button, and on touch screens becomes a swipeable row
export default function Marquee({ children, label, duration = 40, interactive = false }) {
  const [paused, setPaused] = useState(false);
  const copyRef = useRef(null);
  const items = Children.toArray(children);

  // The copy is only decoration: `inert` hides it from keyboard and
  // screen readers, so nothing is announced or focused twice.
  useEffect(() => {
    copyRef.current.inert = true;
  }, []);

  const className = [
    "marquee",
    interactive && "marquee--interactive",
    paused && "is-paused",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} role="region" aria-label={label}>
      <div className="marquee-viewport">
        <div className="marquee-track" style={{ "--duration": `${duration}s` }}>
          <ul className="marquee-group">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <ul className="marquee-group marquee-copy" ref={copyRef} aria-hidden="true">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>

      {interactive && (
        <button
          type="button"
          className="marquee-toggle"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
        >
          <Icon name={paused ? "play" : "pause"} size={14} />
          {paused ? "Play" : "Pause"}
        </button>
      )}
    </div>
  );
}
