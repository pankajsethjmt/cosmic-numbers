export default function SummaryBadge({ theme, typeLabel, number, title }) {
  return (
    <div className={`nn-badge theme-${theme}`}>
      <div className="nn-badge-type">{typeLabel}</div>
      <div className="nn-badge-num">{number ?? "—"}</div>
      <div className="nn-badge-title">{title || "—"}</div>
    </div>
  );
}
