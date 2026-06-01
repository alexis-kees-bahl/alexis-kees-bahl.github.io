/*
This is a reusable card component that will be displayed inside the carousel component.
It has a "dots" prop which is later used in css to create counter dots when the card is inside a Carousel.
*/

import "../App.css";

export default function InnerCard({
  title = null,
  description,
  link=null,
  bgColor = null,
  txtColor = "#FFF",
  titleColor = null,
  overlayColor = "",
}) {
  return (
    <div className="inner-card" style={{ background: bgColor }}>
      <div className="overlay" style={{ background: overlayColor }} />

      <div className="inner-card-content">
        {title && <h3 style={{ color: titleColor }}>{title}</h3>}
        <p className="inner-card-description" style={{ color: txtColor }}>
          {description}
        </p>
        {link && <a className="small-link" target="_blank" href={link}>{link}</a>}
      </div>
    </div>
  );
}
