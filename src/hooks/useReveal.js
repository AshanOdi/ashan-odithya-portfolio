import { useEffect } from "react";

// Fades sections in as they scroll into view.
// It only hides sections once JavaScript is running (the "reveal-ready"
// class), so the content is never invisible if JS fails.
export default function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Skip the hero: it is already on screen when the page loads.
    const sections = document.querySelectorAll("main .section:not(.hero)");
    document.documentElement.classList.add("reveal-ready");

    // IntersectionObserver tells us when an element enters the screen,
    // without checking positions on every scroll event.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
