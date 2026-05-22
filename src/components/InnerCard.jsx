/*
This is a reusable card component that will be displayed inside the carousel component.
It has a "dots" prop which is later used in css to create counter dots when the card is inside a Carousel.
*/


import "../App.css";

export default function InnerCard({
  title=null,
  description,
  bgColor = "#333",
}) {
  return (
    <div className="inner-card" style={{ background: bgColor }}>

      <div className="overlay" />

      <div className="inner-card-content">
        {title && <h2>{title}</h2>}
        <p className="inner-card-description">{description}</p>
      </div>

    </div>
  );
}
