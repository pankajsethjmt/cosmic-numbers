export default function ScoreRow({ part1Score, part2Score }) {
  return (
    <div className="result-score-row">
      <div className="result-score-box">
        <div className="result-score-label">Your Number Score</div>
        <div className="result-score-value">{part1Score}</div>
        <div className="result-score-weight">50% weight</div>
      </div>

      <div className="result-score-box">
        <div className="result-score-label">Random Score</div>
        <div className="result-score-value">{part2Score}</div>
        <div className="result-score-weight">50% weight</div>
      </div>
    </div>
  );
}
