/*
This is a reusable card component which will contain
either a carousel or a double panel, depending on the props we pass to it.
*/

import { useState } from "react";
import InnerCard from "./InnerCard";
import "../App.css";

export default function OuterCard({ title, items = [] }) {
  const [current, setCurrent] = useState(0);
  const [cards, setCards] = useState(items);

  const go = (n) => {
    setCurrent(Math.max(0, Math.min(n, cards.length - 1)));
  };

  const RenderNav = () => {
    return (
      <nav className="carousel-nav">
        <button
          className="nav-btn"
          onClick={() => go(current - 1)}
          disabled={current === 0}
          aria-label="Anterior"
        >
          ←
        </button>

        <div className="carousel-nav-dots">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`carousel-nav-dot${i === current ? " active" : ""}`}
            />
          ))}
        </div>

        <button
          className="nav-btn"
          onClick={() => go(current + 1)}
          disabled={current === cards.length - 1}
          aria-label="Siguiente"
        >
          →
        </button>
      </nav>
    );
  };

  return (
    <div className="card outer-card">
      <div className="oc-header">
        <h2>{title}</h2>
      </div>

      <div className="cards-viewer">
        <div
          className="set-of-cards"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {cards.map((card, index) => (
            <InnerCard
              key={card.id || index}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
              isActive={index === current}
            />
          ))}
        </div>
      </div>

      <div className={`oc-nav${cards.length > 1 ? " oc-nav--visible" : ""}`}>
        {cards.length > 1 && (
          <nav className="carousel-nav">
            <button
              className="nav-btn"
              onClick={() => go(current - 1)}
              disabled={current === 0}
              aria-label="Anterior"
            >
              ←
            </button>

            <div className="carousel-nav-dots">
              {cards.map((_, i) => (
                <span
                  key={i}
                  className={`carousel-nav-dot${i === current ? " active" : ""}`}
                />
              ))}
            </div>

            <button
              className="nav-btn"
              onClick={() => go(current + 1)}
              disabled={current === cards.length - 1}
              aria-label="Siguiente"
            >
              →
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
