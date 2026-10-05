import "./reveal-text.css";

// Text that appears letter by letter: each letter rises a little, fades
// in and comes into focus (from blurred to sharp), one after another.
// It is pure CSS: every letter gets its position number (--i), and the
// CSS uses it to delay that letter's animation a bit more than the last.
//
// Words are kept together (no line break inside a word), and only the
// real letters are used, so nothing overlaps or changes size.
export default function RevealText({ text, delay = 250, stagger = 38 }) {
  let index = 0; // running letter number across all words

  return (
    <span
      className="reveal"
      style={{ "--reveal-delay": `${delay}ms`, "--reveal-stagger": `${stagger}ms` }}
    >
      {/* Screen readers get the plain text, not single letters. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(" ").map((word, w, words) => (
          <span key={w}>
            <span className="reveal-word">
              {[...word].map((ch) => (
                <span key={index} className="reveal-char" style={{ "--i": index++ }}>
                  {ch}
                </span>
              ))}
            </span>
            {w < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </span>
  );
}
