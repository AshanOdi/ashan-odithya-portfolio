import { useEffect, useState } from "react";
import { apps } from "../../data/apps.js";
import Marquee from "../Marquee.jsx";
import AppLogo from "../AppLogo.jsx";
import RevealText from "../RevealText.jsx";
import "./hero.css";

// All hero text lives here, so it is easy to edit in one place.
const content = {
  name: "Ashan Odithya",
  role: "Software Engineer",
  headlineStart: "I build",
  headlineAccent: "full-stack products,",
  headlineEnd: "from idea to cloud.",
  intro:
    "Software Engineer working across React, TypeScript, Node.js and AWS. " +
    "I enjoy building practical products and owning them end to end, " +
    "from the interface to the infrastructure.",
};

// Things shown one by one in the "Currently exploring" badge.
const exploring = [
  "AWS & cloud architecture",
  "backend & system design",
  "AI / ML engineering",
];

const ROTATE_MS = 2200; // how long each item stays on screen

export default function Hero() {
  // Index of the item currently shown in the badge.
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Respect "reduce motion": keep the first item, do not rotate.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % exploring.length); // 0, 1, 2, 0, 1, ...
    }, ROTATE_MS);
    return () => clearInterval(id); // stop the timer if Hero is removed
  }, []);

  return (
    <section className="section hero" id="hero">
      <p className="hero-status">
        <span className="status-dot" aria-hidden="true" />
        <span className="status-label">
          <span className="status-label-long">Currently </span>exploring
        </span>
        {/* key changes every time, so React re-mounts the span and the
            fade-in animation plays again for each new item */}
        <span key={index} className="status-item">
          {exploring[index]}
        </span>
      </p>

      <p className="hero-eyebrow">
        {content.name} <span aria-hidden="true">/</span> {content.role}
      </p>

      <h1 className="hero-title">
        {content.headlineStart}{" "}
        <span className="hero-accent">
          <RevealText text={content.headlineAccent} />
        </span>{" "}
        {content.headlineEnd}
      </h1>

      {/* Intro on the left, buttons on the right (stacked on phones). */}
      <div className="hero-row">
        <p className="hero-intro">{content.intro}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-ghost" href="#contact">
            Contact me
          </a>
        </div>
      </div>

      {/* Grey logo strip of apps I've built (zyner-style "trusted by"). */}
      <div className="hero-apps">
        <p>Apps I’ve designed, built and shipped</p>
        <Marquee label="Apps I've built" duration={35}>
          {apps.map((app) => (
            <AppLogo key={app.name} {...app} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
