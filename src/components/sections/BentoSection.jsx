import { useEffect, useState } from "react";
import "./bento.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* ---------- 1. Tech stack orbit ---------- */
const ORBIT = ["TS", "Node", "AWS", "Docker", "SQL", "Git"];

function OrbitVisual() {
  return (
    <div className="viz orbit">
      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="orbit-track">
        {ORBIT.map((label, i) => (
          <span
            key={label}
            className="orbit-item"
            style={{ "--i": i, "--n": ORBIT.length }}
          >
            <span className="orbit-chip">{label}</span>
          </span>
        ))}
      </div>
      <div className="core">React</div>
    </div>
  );
}

/* ---------- 2. CI/CD pipeline ---------- */
const STEPS = ["Commit", "Build", "Test", "Deploy"];

function PipelineVisual() {
  const reduced = prefersReducedMotion();
  const [stage, setStage] = useState(reduced ? STEPS.length : 0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setStage((s) => (s + 1) % 7), 850);
    return () => clearInterval(id);
  }, [reduced]);

  const done = stage >= STEPS.length;
  const pct = (Math.min(stage, STEPS.length - 1) / (STEPS.length - 1)) * 100;

  return (
    <div className="viz pipeline">
      <div className="pipe">
        <div className="pipe-track">
          <div className="pipe-fill" style={{ width: `${pct}%` }} />
        </div>
        {STEPS.map((step, i) => {
          const state =
            done || i < stage ? "is-done" : i === stage ? "is-active" : "";
          return (
            <div key={step} className={`pipe-step ${state}`}>
              <span className="pipe-dot" />
              <span className="pipe-label">{step}</span>
            </div>
          );
        })}
      </div>
      <div className={`pipe-badge ${done ? "show" : ""}`}>
        ✓ Deployed in 1m 42s
      </div>
    </div>
  );
}

/* ---------- 3. Terminal typing ---------- */
const SCRIPT = [
  { type: "cmd", text: "git push origin main" },
  { type: "out", text: "✓ 48 tests passed" },
  { type: "cmd", text: "npm run deploy" },
  { type: "out", text: "✓ Live at yourname.dev" },
];

function TerminalVisual() {
  const reduced = prefersReducedMotion();
  const [line, setLine] = useState(reduced ? SCRIPT.length : 0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let t;
    if (line >= SCRIPT.length) {
      t = setTimeout(() => { setLine(0); setChars(0); }, 2400);
    } else if (SCRIPT[line].type === "out") {
      t = setTimeout(() => { setLine((l) => l + 1); setChars(0); }, 500);
    } else if (chars < SCRIPT[line].text.length) {
      t = setTimeout(() => setChars((c) => c + 1), 55);
    } else {
      t = setTimeout(() => { setLine((l) => l + 1); setChars(0); }, 450);
    }
    return () => clearTimeout(t);
  }, [line, chars, reduced]);

  return (
    <div className="viz terminal-wrap">
      <div className="terminal" aria-hidden="true">
        <div className="term-bar"><i /><i /><i /></div>
        <div className="term-body">
          {SCRIPT.map((l, i) => {
            if (i > line || (i === line && l.type === "out")) return null;
            const typing = i === line;
            return (
              <div key={i} className={`term-line ${l.type}`}>
                {l.type === "cmd" && <span className="prompt">$</span>}
                {typing ? l.text.slice(0, chars) : l.text}
                {typing && <span className="caret" />}
              </div>
            );
          })}
          {line >= SCRIPT.length && (
            <div className="term-line cmd">
              <span className="prompt">$</span>
              <span className="caret" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- 4. API request flow ---------- */
function ApiVisual() {
  return (
    <div className="viz api">
      <div className="api-stack">
        <div className="api-track">
          <span className="packet" />
        </div>
        <div className="api-node n-client" style={{ top: "0%" }}>
          <span className="node-dot" /> Browser
        </div>
        <div className="api-node n-api" style={{ top: "50%" }}>
          <span className="node-dot" /> REST API
        </div>
        <div className="api-node n-db" style={{ top: "100%" }}>
          <span className="node-dot" /> PostgreSQL
        </div>
        <span className="api-tag">200 OK in 42 ms</span>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function BentoSection() {
  return (
    <section className="bento">
      <header className="bento-head">
        <h2>How I work</h2>
        <p>From the first commit to a live product.</p>
      </header>

      <div className="bento-grid">
        <article className="b-card card-tall">
          <OrbitVisual />
          <div className="b-copy">
            <h3>A stack I know deeply</h3>
            <p>React at the core, with the tools around it that take an idea to production.</p>
          </div>
        </article>

        <article className="b-card">
          <PipelineVisual />
          <div className="b-copy">
            <h3>Shipped, not just written</h3>
            <p>Every project runs through tests and automated deploys.</p>
          </div>
        </article>

        <article className="b-card card-tall">
          <ApiVisual />
          <div className="b-copy">
            <h3>Full-stack thinking</h3>
            <p>I design how data moves, from the interface to the database and back.</p>
          </div>
        </article>

        <article className="b-card">
          <TerminalVisual />
          <div className="b-copy">
            <h3>At home in the terminal</h3>
            <p>Git, CLIs and scripts are part of my daily workflow.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
