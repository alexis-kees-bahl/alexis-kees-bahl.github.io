export default function CardNav({ current, total, onGo }) {
  return (
    <nav className="carousel-nav">
      <button
        className="nav-btn"
        onClick={() => onGo(current - 1)}
        disabled={current === 0}
        aria-label="Anterior"
      >←</button>

      <div className="carousel-nav-dots">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`carousel-nav-dot${i === current ? " active" : ""}`}
          />
        ))}
      </div>

      <button
        className="nav-btn"
        onClick={() => onGo(current + 1)}
        disabled={current === total - 1}
        aria-label="Siguiente"
      >→</button>
    </nav>
  );
}