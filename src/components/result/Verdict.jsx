import "./Verdict.css";

export default function Verdict({ verdict, meta }) {
  return (
    <div
      className="result-verdict-banner"
      style={{
        borderColor: verdict.color + "66",
        color: verdict.color,
      }}
    >
      <span className="result-verdict-emoji">{meta.emoji}</span>

      <div className="result-verdict-title">{verdict.title}</div>

      <div className="result-verdict-hindi">{verdict.hindi}</div>

      <div className="result-verdict-cat">{meta.category}</div>

      <div className="result-verdict-desc">{verdict.desc}</div>
    </div>
  );
}
