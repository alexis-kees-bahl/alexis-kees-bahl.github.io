/*
This is a reusable card component that will be displayed inside the carousel component.
It has a "dots" prop which is later used in css to create counter dots when the card is inside a Carousel.
*/


import "../cards.css";

export default function InnerCard({
  title,
  description,
  bgColor = "#1a1a2e"
}) {
  return (
    <div className="inner-card" style={{ background: bgColor }}>

      <div className="inner-card-overlay" />

      <div className="inner-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  );
}
