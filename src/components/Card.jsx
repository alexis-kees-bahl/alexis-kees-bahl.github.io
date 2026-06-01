/*
This is a reusable card component which will contain
either a carousel or a double panel, depending on the props we pass to it.
*/

import { useState } from "react";
import { useEffect } from "react";
import InnerCard from "./InnerCard";
import "../App.css";

/*Card cant will render diffenrently based on parameters it gets:
1) one array containing only one element → single card shown, no nav bar
2) one array with +1 elements → a carousel of cards, with navigation bar
3) two arrays (items, items2) → dual panel card
*/


export default function Card({ title, items = [], items2 = null, firstPanelTitle = null, secondPanelTitle = null }) {
  const [current, setCurrent] = useState(0); // used to position 
  const [cards, setCards] = useState(items);
  const [cards2, setCards2] = useState(items2);
  const [activeSet, setActiveSet] = useState(cards);
  const [showDualPanels, setShowDualPanels] = useState(false);
  const [hasItems2, setHasItems2] = useState(items2 !== null);

  const fillItems2 = () => {
    if (hasItems2) {
      setCards2(items2);
      setHasItems2(true);
      setShowDualPanels(true);
    }
  };

  useEffect(() => {
    fillItems2();
  }, []);

  const go = (n) => {
    setCurrent(Math.max(0, Math.min(n, activeSet.length - 1)));
  };

  const RenderNav = () => {
    return (
      <nav className="carousel-nav">
        {hasItems2 && !showDualPanels && (
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
                setShowDualPanels(true);
                setCurrent(0);
              }}
            >
              X
            </button>

            <button
              className="nav-btn"
              onClick={() => go(current + 1)}
              disabled={current === activeSet.length - 1}
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
              {activeSet.map((_, i) => (
                <span
                  key={i}
                  className={`carousel-nav-dot${i === current ? " active" : ""}`}
                />
              ))}
            </div>

            <button
              className="nav-btn"
              onClick={() => go(current + 1)}
              disabled={current === activeSet.length - 1}
              aria-label="Siguiente"
            >
              →
            </button>
          </>
        )}
      </nav>
    );
  };

  const RenderDualPanel = () => {
    return (
      <div
        className={`dual-panels${hasItems2 && showDualPanels === true ? "" : " dual-panels--hidden"}`}
      >
        <div className="panel left-panel">
          <div className="overlay" />
          <div className="inner-card-content">
            <h3>{firstPanelTitle !== null ? firstPanelTitle : "No title"}</h3>
            <button
              onClick={() => {
                setActiveSet(cards);
                setShowDualPanels(false);
                setCurrent(0);
              }}
            >
              View details
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="overlay" />
          <div className="inner-card-content">
            <h3>{secondPanelTitle !== null ? secondPanelTitle : "No title"}</h3>
            <button
              onClick={() => {
                setActiveSet(cards2);
                setShowDualPanels(false);
                setCurrent(0);
              }}
            >
              View details{" "}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const RenderSetOfCards = () => {
    return (
      <div
        className={`set-of-cards${hasItems2 && showDualPanels ? " set-of-cards--hidden" : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {activeSet.map((card, index) => (
          <InnerCard
            key={card.id || index}
            title={card.title}
            description={card.description}
            link={card.link}
            bgColor={card.bgColor}
            txtColor={card.txtColor}
            titleColor={card.titleColor}
            overlayColor={card.overlayColor}
            isActive={index === current}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="card outer-card">
      <div className="card-header">
        {items.length === 0 ? <h1>{title}</h1> : <h2>{title}</h2>}
      </div>
      <div
        className={`cards-viewer${items.length === 0 ? " cards-viewer--empty" : ""}`}
      >
        {RenderDualPanel()}
        {items.length === 0 ? (
          <div style={{ height: "0" }} />
        ) : (
          RenderSetOfCards()
        )}
      </div>
      <div
        className={`card-nav${activeSet && activeSet.length > 1 && !showDualPanels ? " card-nav--visible" : ""}`}
      >
        {RenderNav()}
      </div>
    </div>
  );
}
