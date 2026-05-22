/*
This is a reusable card component which will contain
either a carousel or a double panel, depending on the props we pass to it.
*/

import { useState } from "react";
import { useEffect } from "react";
import InnerCard from "./InnerCard";
import "../App.css";

export default function OuterCard({ title, items = [], items2 = null }) {
  const [current, setCurrent] = useState(0);
  const [cards, setCards] = useState(items);
  const [cards2, setCards2] = useState(items2);
  const [activeSet, setActiveSet] = useState(null);
  const [hasItems2, setHasItems2] = useState(items2 !== null);

  const fillItems2 = () => {
    if (hasItems2) {
      setCards2(items2);
      setHasItems2(true);
      setActiveSet(null);
    } else {
      setActiveSet(cards);
    }
  };

  useEffect(() => {
    fillItems2();
  }, []);

  const go = (n) => {
    setCurrent(Math.max(0, Math.min(n, cards.length - 1)));
  };

  const RenderNav = (set) => {
    return (
      <nav className="carousel-nav">
        {hasItems2 && (
          <>
            <button
              className="nav-btn"
              onClick={() => go(current - 1)}
              disabled={current === 0}
              aria-label="Anterior"
            >
              ←
            </button>

            <button
              className="close-btn"
              onClick={() => {
                setActiveSet(null);
                setCurrent(0);
              }}
            >
              X
            </button>

            <button
              className="nav-btn"
              onClick={() => go(current + 1)}
              disabled={current === set.length - 1}
              aria-label="Siguiente"
            >
              →
            </button>
          </>
        )}
        {!hasItems2 && (
          <>
            <button
              className="nav-btn"
              onClick={() => go(current - 1)}
              disabled={current === 0}
              aria-label="Anterior"
            >
              ←
            </button>

            <div className="carousel-nav-dots">
              {set.map((_, i) => (
                <span
                  key={i}
                  className={`carousel-nav-dot${i === current ? " active" : ""}`}
                />
              ))}
            </div>

            <button
              className="nav-btn"
              onClick={() => go(current + 1)}
              disabled={current === set.length - 1}
              aria-label="Siguiente"
            >
              →
            </button>
          </>
        )}
      </nav>
    );
  };

  return (
    <div className="card outer-card">

      <div className="oc-header">
        <h2>{title}</h2>
      </div>

      <div
        className={`cards-viewer${hasItems2 && activeSet === null ? "-dual" : ""}`}
      >
        {hasItems2 && (
          <div
            className={`dual-panels${hasItems2 && activeSet === null ? "--visible" : "--hidden"}`}
          >
            <div className="panel" style={{ background: "#b768fc" }}>
              <div className="overlay" />
              <h2 style={{ color: "#fffb8d", zIndex: 10 }}>Frontend</h2>
              <button
                style={{ color: "#1cc", zIndex: 10 }}
                onClick={() => setActiveSet(cards)}
              >
                View details
              </button>
            </div>
            <div className="panel" style={{ background: "#131415" }}>
              <div className="overlay" />
              <h2 style={{ color: "#42ba90", zIndex: 10 }}>Backend</h2>
              <button
                style={{ color: "#999", zIndex: 100 }}
                onClick={() => setActiveSet(cards2)}
              >
                View details{" "}
              </button>
            </div>
          </div>
        )}

        <div
          className={`set-of-cards${activeSet ? "--visible" : "--hidden"}`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {activeSet &&
            activeSet.map((card, index) => (
              <InnerCard
                key={card.id || index}
                title={card.title}
                description={card.description}
                bgColor={card.bgColor}
                txtColor={card.txtColor}
                overlayColor={card.overlayColor}
                isActive={index === current}
              />
            ))}
        </div>
      </div>

      <div
        className={`oc-nav${activeSet && activeSet.length > 1 ? " oc-nav--visible" : ""}`}
      >
        {activeSet && activeSet.length > 1 && RenderNav(activeSet)}
      </div>    </div>
  );
}
