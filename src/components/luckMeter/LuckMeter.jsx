import { useEffect, useState } from "react";
import "./LuckMeter.css";

export default function LuckMeter({ scale, color }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(scale * 10);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [scale]);

  return (
    <div className="result-luck-meter-wrap">
      <div className="result-luck-meter-label">
        <span>Luck Scale</span>
        <span>{scale}/10</span>
      </div>

      <div className="result-luck-meter-track">
        <div
          className="result-luck-meter-fill"
          style={{
            width: `${width}%`,
            background:
              scale <= 3
                ? "linear-gradient(90deg, #8b2020, #f07878)"
                : scale <= 6
                  ? "linear-gradient(90deg, #7a5020, #c9a84c)"
                  : scale <= 8
                    ? "linear-gradient(90deg, #1a6e40, #7ceba0)"
                    : "linear-gradient(90deg, #7a6010, #f0d080)",
          }}
        />
      </div>

      <div className="result-luck-scale" style={{ color }}>
        {scale} / 10
      </div>
    </div>
  );
}
