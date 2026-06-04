import { useState } from "react"
import "../App.css"
import Icon from "../assets/profile.svg"

export default function Header({english, setEnglish}) {

    return (
        <header>
            <h2>CV Alexis Kees Bahl</h2>
            <div className="language-slider">
                <div
                className={`language-slider__button${english ? " language-slider__button-eng" : ""}`}
                onClick={()=> setEnglish(!english)}
                >{english ? "EN": "ES"}</div>
            </div>
        </header>

    )
}