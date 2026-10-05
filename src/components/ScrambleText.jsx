import { useCallback, useEffect, useRef, useState } from "react";
import "./scramble-text.css";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]=+*#";
const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

// "Decoding" text: starts as random characters, which settle into the
// real text one by one from left to right. Hovering plays it again.
//
// Layout trick: every character keeps its REAL letter in the page (made
// invisible), so it takes exactly the right width. The random glyph is
// drawn on top of it with CSS (::after). Because the real letters hold
// the space, the headline never jumps or re-wraps while it animates.
export default function ScrambleText({ text, delay = 400, duration = 1300 }) {
  // For each character: the glyph to show, or null once it has settled.
  const [glyphs, setGlyphs] = useState(() => [...text].map(() => null));
  const running = useRef(false);

  const play = useCallback(
    (startDelay) => {
      if (running.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      running.current = true;

      const chars = [...text];
      // Each character settles at its own moment: roughly left to right,
      // with a little randomness so it feels organic.
      const settleAt = chars.map(
        (_, i) => (i / chars.length) * 0.75 + Math.random() * 0.25
      );
      const isFixed = (ch) => ch === " "; // spaces never scramble

      let start = 0;
      let lastSwap = 0;
      let frame = 0;

      const tick = (now) => {
        if (!start) start = now + startDelay;
        const progress = Math.max(0, (now - start) / duration);

        // Swap glyphs every ~55 ms (every frame would be too flickery).
        if (now - lastSwap > 55 || progress >= 1) {
          lastSwap = now;
          setGlyphs(
            chars.map((ch, i) =>
              isFixed(ch) || progress >= settleAt[i] ? null : randomGlyph()
            )
          );
        }

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          running.current = false;
        }
      };

      // Show random glyphs straight away (during the delay too).
      setGlyphs(chars.map((ch) => (isFixed(ch) ? null : randomGlyph())));
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    },
    [text, duration]
  );

  // Play once when the page loads.
  useEffect(() => {
    const stop = play(delay);
    return () => {
      stop?.();
      running.current = false;
    };
  }, [play, delay]);

  return (
    <span className="scramble" onMouseEnter={() => play(0)}>
      {/* Screen readers get the plain text, never the random letters. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {[...text].map((ch, i) => (
          <span
            key={i}
            className={glyphs[i] ? "scramble-char is-scrambling" : "scramble-char"}
            data-glyph={glyphs[i] ?? undefined}
          >
            {ch}
          </span>
        ))}
      </span>
    </span>
  );
}
