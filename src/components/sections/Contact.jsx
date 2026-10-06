import { useState } from "react";
import { site } from "../../data/site.js";
import "./contact.css";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "in/ashan-odithya-sirisena", href: site.linkedin },
  { label: "GitHub", value: "github.com/AshanOdi", href: site.github },
];

export default function Contact() {
  // "idle" -> "sending" -> "sent" or "error"
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault(); // stop the browser from reloading the page
    const form = e.currentTarget;

    // No form service yet: open the visitor's email app instead.
    if (!site.formEndpoint) {
      const data = new FormData(form);
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-intro">
        <p className="contact-eyebrow">
          <span className="contact-dot" aria-hidden="true" /> Open to full-time roles and freelance projects
        </p>
        <h2>Let’s build something together.</h2>
        <p className="contact-text">
          Have a role, a project or just a question? Send a message and I’ll
          get back to you within a couple of days.
        </p>

        <ul className="contact-links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <span className="contact-link-label">{link.label}</span>
                <span className="contact-link-value">{link.value}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>

        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {/* role="status" makes screen readers announce the result */}
        <p className="contact-status" role="status">
          {status === "sent" && "Thanks! Your message is on its way."}
          {status === "error" && "Something went wrong. Please email me directly."}
        </p>
      </form>
    </section>
  );
}
