import { useEffect } from "react";
import "./StarfieldDeep.css";

export default function Starfield() {
  useEffect(() => {
    const layers = document.querySelectorAll(".layer");

    layers.forEach((layer, index) => {
      layer.innerHTML = "";

      const starCount = index === 0 ? 120 : index === 1 ? 80 : 40;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";

        const size = Math.random() * (index + 1) + 0.5;

        star.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          --dur: ${2 + Math.random() * 5}s;
          --max-op: ${0.4 + Math.random() * 0.6};
          animation-delay: ${Math.random() * 6}s;
        `;

        layer.appendChild(star);
      }
    });

    // 🔥 Shooting star interval (ONLY ONCE)
    const interval = setInterval(() => {
      const container = document.getElementById("starsDeep");
      if (!container) return;

      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";

      // Start mostly bottom-left but slightly random
      const startX = Math.random() * 50;
      const startY = 60 + Math.random() * 30;

      const duration = 4 + Math.random() * 3; // 4–7 sec (slow)
      const distance = 180 + Math.random() * 120; // short elegant path
      const angle = 45 + (Math.random() * 10 - 5); // small variation
      const length = 40 + Math.random() * 40; // thin & short
      const opacity = 0.5 + Math.random() * 0.3; // dim

      shootingStar.style.left = startX + "%";
      shootingStar.style.top = startY + "%";
      shootingStar.style.setProperty("--duration", duration + "s");
      shootingStar.style.setProperty("--distance", distance + "px");
      shootingStar.style.setProperty("--angle", angle + "deg");
      shootingStar.style.setProperty("--length", length + "px");
      shootingStar.style.setProperty("--opacity", opacity);

      container.appendChild(shootingStar);

      setTimeout(() => shootingStar.remove(), duration * 1000);
    }, 7000); // rare (every 7 sec)

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div id="starsDeep">
      <div className="layer layer1"></div>
      <div className="layer layer2"></div>
      <div className="layer layer3"></div>
    </div>
  );
}
