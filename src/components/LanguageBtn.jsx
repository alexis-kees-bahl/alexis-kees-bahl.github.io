import { useState } from "react";
import "../App.css";
import Icon from "../assets/profile.svg";

export default function LanguageBtn ({ english, setEnglish }) {
  return (
    <>
    <div className="language-tab">
    <div className="language-tab__slider">
      <div
        className={`language-tab__slider-button${english ? " language-slider__button-eng" : ""}`}
        onClick={() => setEnglish(!english)}
      >
        {english ? "EN" : "ES"}
      </div>
    </div>
    </div>
    </>
  );
}
