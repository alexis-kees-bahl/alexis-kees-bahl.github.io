/*
This is a reusable card component that will be displayed inside the carousel component.
It has a "dots" prop which is later used in css to create counter dots when the card is inside a Carousel.
*/


import "../App.css";

export default function InnerCard({
  title=null,
  description,
  bgColor = "#333",
  txtColor = "#FFF",
  titleColor="#42ba90",
  overlayColor = "rgba(0, 0, 0, 0.5)",
}) {
  return (
    <div className="inner-card" style={{ background: bgColor }}>

      <div className="overlay" style={{ background: overlayColor }} />

      <div className="inner-card-content">
        {title && <h3 style={{color:titleColor}}>{title}</h3>}
        <p className="inner-card-description" style={{ color: txtColor }}>
          {description}
        </p>
      </div>

    </div>
  );
}
