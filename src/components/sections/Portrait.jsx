import { useEffect, useRef } from "react";
import "./portrait.css";

// Layered portrait for the About section:
//   1. an accent panel with a dot grid and a giant outlined name (back)
//   2. the cut-out photo, whose head "pops out" above the panel (middle)
//   3. two floating UI cards (front)
// Moving the mouse shifts each layer by a different amount (parallax),
// which makes the flat image feel 3D. On scroll-in, the layers build up
// one after another.
export default function Portrait() {
  const ref = useRef(null);

  // Entrance: add "is-in" once the portrait scrolls into view.
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Parallax: follow the mouse smoothly. Only for real mouse users who
  // allow motion; phones and "reduce motion" get the still version.
  useEffect(() => {
    const canMove = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    ).matches;
    if (!canMove) return;

    const el = ref.current;
    const target = { x: 0, y: 0 }; // where the mouse is (-1 to 1)
    const current = { x: 0, y: 0 }; // where the layers are now
    let frame = 0;

    // Each frame, move 8% of the way to the target. This "easing" makes
    // the layers glide and settle instead of jumping with the mouse.
    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      el.style.setProperty("--px", current.x.toFixed(3));
      el.style.setProperty("--py", current.y.toFixed(3));
      const settled =
        Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };
    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      target.y = ((e.clientY - r.top) / r.height) * 2 - 1;
      start();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      start();
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="portrait" ref={ref}>
      <div className="portrait-panel" aria-hidden="true">
        <span className="portrait-name">ASHAN</span>
      </div>

      <img
        className="portrait-person"
        src="/images/ashan-cutout.webp"
        alt="Portrait of Ashan Odithya"
        width="900"
        height="1350"
        loading="lazy"
        decoding="async"
      />

      <div className="portrait-card card-status" aria-hidden="true">
        <span className="card-dot" />
        <span>
          <strong>Open to work</strong>
          <small>Remote · Sri Lanka</small>
        </span>
      </div>

      <div className="portrait-card card-code" aria-hidden="true">
        <small>ashan.config.ts</small>
        <code>
          <span className="k">stack</span>: <span className="s">"full"</span>,
          <br />
          <span className="k">cloud</span>: <span className="s">"AWS"</span>,
          <br />
          <span className="k">learning</span>: <span className="s">"AI"</span>
        </code>
      </div>
    </div>
  );
}
