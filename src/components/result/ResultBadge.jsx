export default function ResultBadge({ label, value, meaning }) {
  return (
    <div className="result-badge">
      <div className="result-badge-label">{label}</div>
      <div className="result-badge-value">{value}</div>
      <div className="result-badge-meaning">{meaning}</div>
    </div>
  );
}
