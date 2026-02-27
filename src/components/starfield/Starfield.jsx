import { useEffect } from "react";
import "./Starfield.css";

export default function Starfield() {
  useEffect(() => {
    const container = document.getElementById("stars");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 160; i++) {
      const star = document.createElement("div");
      star.className = "star";

      const size = Math.random() * 2.5 + 0.5;

      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --dur: ${2 + Math.random() * 5}s;
        --max-op: ${0.3 + Math.random() * 0.7};
        animation-delay: ${Math.random() * 6}s;
      `;

      container.appendChild(star);
    }
  }, []);

  return <div id="stars"></div>;
}
