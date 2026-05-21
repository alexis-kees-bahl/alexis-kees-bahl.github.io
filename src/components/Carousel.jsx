/*
This carousel component uses an array of Tarjeta components
and shows them side by side, inside a viewer to create the slider effect.


import { useState, useRef } from "react";
import OuterCard from "./OuterCard";
import InnerCard from "./InnerCard";

export default function Carousel({ title, items = [] }) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);

  const go = (n) => {
    setCurrent(Math.max(0, Math.min(n, items.length - 1)));
  };

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1));
    touchStart.current = null;
  };

  // Nav que le pasamos a OuterCard
  const nav = (
    <div className="carousel-nav">
      <button
        className="nav-btn"
        onClick={() => go(current - 1)}
        disabled={current === 0}
        aria-label="Anterior"
      >
        ←
      </button>
      <div className="carousel-nav-dots">
        {Array.from({ length: items.length }).map((_, i) => (
          <span
            key={i}
            className={`carousel-nav-dot${i === current ? " active" : ""}`}
          />
        ))}
      </div>
      <button
        className="nav-btn"
        onClick={() => go(current + 1)}
        disabled={current === items.length - 1}
        aria-label="Siguiente"
      >
        →
      </button>
    </div>
  );

  return (
    <OuterCard title={title} nav={nav}>
      <div
        className="carousel-track-wrap"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(calc(-${current} * 100cqw))` }}
        >
          {items.map((item, i) => (
            <InnerCard
              key={i}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </OuterCard>
  );
}
*/

// Carousel.jsx
// Maneja el estado de navegación y el track de InnerCards.
// Expone su nav hacia arriba via la prop onNav.
//
// props:
//   items      Array<{ title, description, bgColor }>
//   onNav      callback — recibe el nav construido cada vez que current cambia
//   isExpanded boolean — si está expandido dentro de DoublePanelCard
//   isHidden   boolean — si está oculto dentro de DoublePanelCard
//   onExpand   callback — para expandirse dentro de DoublePanelCard
//   data       { label, color, textColor } — usado en DoublePanelCard

import { useState, useRef, useEffect } from "react";
import InnerCard from "./InnerCard";

export default function Carousel({
  items = [],
  onNav,
  isExpanded = false,
  isHidden = false,
  onExpand,
  data,
}) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);

  const go = (n) => {
    setCurrent(Math.max(0, Math.min(n, items.length - 1)));
  };

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1));
    touchStart.current = null;
  };

  // Sube el nav a quien lo contiene cada vez que current cambia
  useEffect(() => {
    if (!onNav) return;
    onNav(
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
          {items.map((_, i) => (
            <span
              key={i}
              className={`carousel-nav-dot${i === current ? " active" : ""}`}
            />
          ))}
        </div>
        <button
          className="nav-btn"
          onClick={() => go(current + 1)}
          disabled={current === items.length - 1}
          aria-label="Siguiente"
        >
          →
        </button>
      </>,
    );
  }, [current]);

  return (
    <div
      className={`carousel${isHidden ? " carousel--hidden" : ""}${isExpanded ? " carousel--expanded" : ""}`}
      style={
        data ? { background: data.color, color: data.textColor } : undefined
      }
      onClick={!isExpanded && onExpand ? onExpand : undefined}
    >
      {/* Label del panel cuando no está expandido (solo en DoublePanelCard) */}
      {data && !isExpanded && (
        <div className="panel-label" style={{ color: data.textColor }}>
          <span className="panel-name">{data.label}</span>
          <span className="panel-hint">clic para ver</span>
        </div>
      )}

      {/* Track — visible siempre en CarouselCard, solo cuando expandido en DoublePanelCard */}
      {(!data || isExpanded) && (
        <div
          className="carousel-track-wrap"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="carousel-track"
            style={{ transform: `translateX(calc(-${current} * 100cqw))` }}
          >
            {items.map((item, i) => (
              <InnerCard
                key={i}
                title={item.title}
                description={item.description}
                bgColor={item.bgColor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
