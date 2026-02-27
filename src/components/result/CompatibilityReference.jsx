export default function CompatibilityReference({ rows }) {
  return (
    <details className="result-reference-details">
      <summary className="result-reference-summary">
        Vedic Numerology Compatibility Reference
      </summary>
      <p className="result-reference-note">
        Based on Astro Pankaj Seth&apos;s Vedic Numerology system. Each number
        carries a planetary vibration that determines friendship, neutrality,
        or enmity.
      </p>

      <table className="result-num-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Planet</th>
            <th>Best Friend</th>
            <th>Friend</th>
            <th>Neutral</th>
            <th>Enemy</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.number}>
              <td>{row.number}</td>
              <td>{row.planet}</td>
              <td>{row.bestfriend}</td>
              <td>{row.friend}</td>
              <td>{row.neutral}</td>
              <td>{row.enemy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
}
