import { Children, useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import "./marquee.css";

// An endless, slowly scrolling row.
// The items are rendered twice, side by side. When the row has moved by
// exactly one copy's width, it jumps back by that width. Because the
// second copy then sits exactly where the first one was, the jump is
// invisible and the loop never ends.
//
// Two modes:
//   default      pure CSS animation, for decoration (the logo strip)
//   interactive  JavaScript-driven scrolling for rows with buttons/links
//                (the projects strip): it auto-scrolls, but people can
//                also scroll it themselves with a trackpad, by dragging,
//                by swiping, or with the arrow buttons.
//
// Props:
//   label        accessible name for the row
//   duration     seconds for one full loop in CSS mode (bigger = slower)
//   speed        pixels per second in interactive mode
//   interactive  see above
export default function Marquee({
  children,
  label,
  duration = 40,
  speed = 30,
  interactive = false,
}) {
  const items = Children.toArray(children);
  const viewportRef = useRef(null);
  const copyRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused); // read inside the animation loop
  pausedRef.current = paused;
  const scrollerRef = useRef(null); // { by(direction) } for the arrow buttons

  // Keep the copy out of the keyboard tab order and screen readers, so
  // nothing is announced or focused twice. (In CSS mode it is never
  // reachable at all, so `inert` hides it completely.)
  useEffect(() => {
    const copy = copyRef.current;
    if (!interactive) {
      copy.inert = true;
      return;
    }
    copy.querySelectorAll("a, button").forEach((el) => (el.tabIndex = -1));
  }, [interactive]);

  // ---------- Interactive mode: the scrolling engine ----------
  useEffect(() => {
    if (!interactive) return;
    const viewport = viewportRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let pos = 0; // our own exact position (scrollLeft gets rounded by browsers)
    let copyWidth = 0;
    let last = 0; // time of the previous frame
    let frame = 0;
    let hovering = false;
    let resumeAt = 0; // after manual scrolling, wait until this time
    let visible = false;

    const measure = () => {
      copyWidth = copyRef.current.offsetLeft;
    };

    // Keep pos inside the first copy, so there is always room to move.
    const wrap = (value) => {
      if (copyWidth <= 0) return value;
      while (value >= copyWidth) value -= copyWidth;
      while (value < 0) value += copyWidth;
      return value;
    };
    const jumpTo = (value) => {
      pos = wrap(value);
      viewport.scrollLeft = pos;
    };

    // People scrolled by hand: take over their position, pause a moment.
    const userMoved = () => {
      resumeAt = performance.now() + 2500;
    };

    const tick = (now) => {
      const dt = last ? Math.min(now - last, 50) : 0; // ms since last frame
      last = now;
      const moving =
        !reduceMotion && visible && !hovering && !pausedRef.current && now > resumeAt;
      if (moving) jumpTo(pos + (speed * dt) / 1000);
      frame = requestAnimationFrame(tick);
    };

    // A scroll we did not cause (trackpad, swipe, keyboard): follow it.
    const onScroll = () => {
      const byUser = Math.abs(viewport.scrollLeft - pos) > 2;
      // Keep the loop endless in both directions: at the very start,
      // jump to the identical spot in the second copy.
      if (viewport.scrollLeft <= 0 && copyWidth > 0) {
        pos = copyWidth;
        viewport.scrollLeft = pos;
      } else if (byUser) {
        // Just follow along; only jump if we passed the loop point.
        // (Setting scrollLeft here would cancel a smooth arrow scroll.)
        pos = viewport.scrollLeft;
        if (pos >= copyWidth) jumpTo(pos);
      }
      if (byUser) userMoved();
    };

    // Drag to scroll with a mouse (touch already scrolls natively).
    let drag = null;
    const onPointerDown = (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      drag = { x: e.clientX, start: pos, moved: false };
    };
    const onPointerMove = (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (Math.abs(dx) > 5) {
        drag.moved = true;
        viewport.classList.add("is-dragging");
      }
      if (drag.moved) {
        jumpTo(drag.start - dx);
        userMoved();
      }
    };
    const onPointerUp = () => {
      if (!drag) return;
      // A real drag should not also "click" the card under the mouse.
      if (drag.moved) {
        viewport.addEventListener("click", (e) => e.preventDefault(), { capture: true, once: true });
        setTimeout(() => viewport.classList.remove("is-dragging"), 0);
      }
      drag = null;
    };

    const onEnter = (e) => { if (e.pointerType === "mouse") hovering = true; };
    const onLeave = () => { hovering = false; };
    const onFocusIn = () => { hovering = true; };
    const onFocusOut = () => { hovering = false; };

    // Only animate while the strip is on screen (saves battery).
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(viewport);
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);

    viewport.addEventListener("scroll", onScroll, { passive: true });
    viewport.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    viewport.addEventListener("pointerenter", onEnter);
    viewport.addEventListener("pointerleave", onLeave);
    viewport.addEventListener("focusin", onFocusIn);
    viewport.addEventListener("focusout", onFocusOut);
    measure();
    frame = requestAnimationFrame(tick);

    // Arrow buttons: smooth-scroll by about one card.
    scrollerRef.current = {
      by(direction) {
        const step = (viewport.querySelector(".marquee-group > li")?.offsetWidth || 300) + 20;
        // Wrap first (invisible jump) so the smooth scroll never crosses
        // the loop point, which would interrupt it.
        if (direction > 0 && pos + step >= copyWidth) jumpTo(pos - copyWidth);
        if (direction < 0 && pos - step < 0) jumpTo(pos + copyWidth);
        pos += direction * step;
        viewport.scrollTo({ left: pos, behavior: reduceMotion ? "auto" : "smooth" });
        userMoved();
      },
    };

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      ro.disconnect();
      viewport.removeEventListener("scroll", onScroll);
      viewport.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      viewport.removeEventListener("pointerenter", onEnter);
      viewport.removeEventListener("pointerleave", onLeave);
      viewport.removeEventListener("focusin", onFocusIn);
      viewport.removeEventListener("focusout", onFocusOut);
    };
  }, [interactive, speed]);

  const className = ["marquee", interactive ? "marquee--interactive" : "marquee--css"]
    .join(" ");

  return (
    <div className={className} role="region" aria-label={label}>
      <div className="marquee-viewport" ref={viewportRef}>
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
        <div className="marquee-controls">
          <button type="button" className="marquee-btn" aria-label="Scroll left"
            onClick={() => scrollerRef.current?.by(-1)}>
            <Icon name="arrowLeft" size={16} />
          </button>
          <button type="button" className="marquee-btn" aria-label="Scroll right"
            onClick={() => scrollerRef.current?.by(1)}>
            <Icon name="arrowRight" size={16} />
          </button>
          <button type="button" className="marquee-btn marquee-toggle"
            onClick={() => setPaused(!paused)} aria-pressed={paused}>
            <Icon name={paused ? "play" : "pause"} size={14} />
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      )}
    </div>
  );
}
