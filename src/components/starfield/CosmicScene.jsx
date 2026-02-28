import { useEffect, useRef } from "react";
import "./cosmic.css";

export default function CosmicScene({
  bg = true,
  nebula = true,
  dense = true,
  twinkle = true,
  shooting = true,
  astronaut = false,
  asteroids1 = false,
  asteroids2 = false,
}) {
  const denseRef = useRef(null);
  const twinkleRef = useRef(null);
  const shootingRef = useRef(null);

  // Dense stars
  useEffect(() => {
    if (!dense || !denseRef.current) return;

    const container = denseRef.current;
    container.innerHTML = "";

    for (let i = 0; i < 200; i++) {
      const star = document.createElement("div");
      star.className = "star dense";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }, [dense]);

  // Twinkle stars
  useEffect(() => {
    if (!twinkle || !twinkleRef.current) return;

    const container = twinkleRef.current;
    container.innerHTML = "";

    for (let i = 0; i < 80; i++) {
      const star = document.createElement("div");
      star.className = "star twinkle";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }, [twinkle]);

  // Shooting stars
  useEffect(() => {
    if (!shooting || !shootingRef.current) return;

    const container = shootingRef.current;

    const interval = setInterval(() => {
      const meteor = document.createElement("div");
      meteor.className = "shooting-star";

      meteor.style.left = Math.random() * 40 + "%";
      meteor.style.top = 60 + Math.random() * 30 + "%";

      container.appendChild(meteor);
      setTimeout(() => meteor.remove(), 6000);
    }, 8000);

    return () => clearInterval(interval);
  }, [shooting]);

  return (
    <div className="cosmic">
      {bg && <div className="layer bg" />}
      {nebula && <div className="layer nebula" />}
      {dense && <div ref={denseRef} className="layer dense-layer" />}
      {twinkle && <div ref={twinkleRef} className="layer twinkle-layer" />}
      {shooting && <div ref={shootingRef} className="layer shooting-layer" />}
      {astronaut && (
        <div className="layer astronaut-layer">
          <img src="/astronaut.png" className="astronaut" alt="" />
        </div>
      )}
      {/* 🪨 Asteroids */}
      {asteroids1 && <div className="asteroid a1"></div>}
      {asteroids2 && <div className="asteroid a2"></div>}
    </div>
  );
}
