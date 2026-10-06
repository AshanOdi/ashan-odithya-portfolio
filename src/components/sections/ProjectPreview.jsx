import "./project-preview.css";

// A mini browser window. Inside it shows the project's real screenshot
// when there is one (`image`), otherwise a simple mock of the app's UI.
export default function ProjectPreview({ domain, type, image }) {
  const Body = bodies[type] ?? DashboardUI;

  return (
    <div className="pp" aria-hidden="true">
      <div className="pp-bar">
        <span className="pp-dots"><i /><i /><i /></span>
        <span className="pp-url">{domain}</span>
      </div>
      {image ? (
        <div className="pp-shot">
          <img src={image} alt="" width="1440" height="900" loading="lazy" decoding="async" />
        </div>
      ) : (
        <div className="pp-body">
          <Body />
        </div>
      )}
    </div>
  );
}

// Bar heights for the chart, as percentages.
const bars = [40, 65, 50, 80, 58, 92, 70, 85];

function DashboardUI() {
  return (
    <div className="pp-dash">
      <div className="pp-side">
        <i className="is-on" /><i /><i /><i />
      </div>
      <div className="pp-main">
        <div className="pp-stats">
          <span><b /><em /></span>
          <span><b /><em /></span>
          <span><b /><em /></span>
        </div>
        <div className="pp-chart">
          {bars.map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} className={i === 5 ? "is-on" : undefined} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BoardUI() {
  const columns = [3, 2, 2];
  return (
    <div className="pp-board">
      {columns.map((cards, c) => (
        <div className="pp-col" key={c}>
          <em />
          {Array.from({ length: cards }, (_, i) => (
            <span key={i} className={c === 1 && i === 0 ? "is-on" : undefined} />
          ))}
        </div>
      ))}
    </div>
  );
}

function ChatUI() {
  return (
    <div className="pp-chat">
      <span className="from-them" style={{ width: "62%" }} />
      <span className="from-me" style={{ width: "48%" }} />
      <span className="from-them" style={{ width: "70%" }} />
      <span className="from-me is-on" style={{ width: "40%" }} />
      <div className="pp-input"><em /><i /></div>
    </div>
  );
}

function ListUI() {
  return (
    <div className="pp-list">
      <div className="pp-search" />
      {[0, 1, 2].map((i) => (
        <div className="pp-row" key={i}>
          <i />
          <span><b /><em /></span>
          <strong className={i === 0 ? "is-on" : undefined} />
        </div>
      ))}
    </div>
  );
}

function TerminalUI() {
  return (
    <div className="pp-term">
      <p><span>$</span> npx cdk deploy --all</p>
      <p className="ok">✓ NetworkStack</p>
      <p className="ok">✓ DatabaseStack</p>
      <p className="ok">✓ ApiStack</p>
      <p><span>$</span> <i /></p>
    </div>
  );
}

const bodies = {
  dashboard: DashboardUI,
  board: BoardUI,
  chat: ChatUI,
  list: ListUI,
  terminal: TerminalUI,
};
