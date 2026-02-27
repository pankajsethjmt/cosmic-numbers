const STAR_SYMBOL = String.fromCodePoint(0x2726);

export default function MatchBreakdown({ matches }) {
  return (
    <>
      <div className="result-breakdown-heading">{STAR_SYMBOL} Match Breakdown</div>
      <div className="result-match-grid">
        {matches.map((match) => (
          <div
            key={match.key}
            className={`result-match-item result-match-${match.relation}`}
          >
            <div className="result-match-type-label">{match.label}</div>
            <div className="result-match-num">{match.to}</div>
            <div className="result-match-planet">{match.planet}</div>
            <div className="result-match-relation">{match.relationLabel}</div>
            <div className="result-match-verdict">{match.relationVerdict}</div>
          </div>
        ))}
      </div>
    </>
  );
}
