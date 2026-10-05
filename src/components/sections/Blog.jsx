import { posts } from "../../data/posts.js";
import "./blog.css";

// Turns "2026-09-12" into "Sep 12, 2026".
function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Blog() {
  return (
    <section className="section" id="blog">
      <header className="section-head">
        <h2>Notes</h2>
        <p>Things I learned and wrote down along the way.</p>
      </header>

      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.link}>
            {/* The whole row is one link, so it is easy to click. */}
            <a className="post" href={post.link} target="_blank" rel="noreferrer">
              <p className="post-meta">
                {/* <time> tells browsers and search engines this is a date */}
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>/</span> {post.readTime}
              </p>
              <div className="post-main">
                <h3>{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <ul className="post-tags">
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <span className="post-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
