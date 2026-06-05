import { useState } from "react";
import "./App.css";
import Lang from "./components/LanguageBtn";
import Card from "./components/Card";
import greenHexa from "./assets/green-hexagons.jpg";
import {
  textoMultilinea,
  datosPersonales,
  formacion,
  ingles,
  experiencia,
  proyectos,
  frontend,
  backend,
  otras,
  habilidadesBlandas,
} from "./components/Data";
import {
  datosPersonalesEng,
  formacionEng,
  inglesEng,
  experienciaEng,
  proyectosEng,
  frontendEng,
  backendEng,
  otrasEng,
  habilidadesBlandasEng,
} from "./components/DataEng";



export default function App() {
  const [english, setEnglish] = useState(false);
  return (
    <>
      {/* background image */}
      <picture className="background-image-container">
        <source srcSet={greenHexa} type="image/avif" />
        <img
          className="background-image"
          src={greenHexa}
          alt="Fondo de pantalla"
        />
      </picture>
      <Lang english={english} setEnglish={setEnglish} />

      {/*
      Main section containing Card components
      with different parameters
      that result in different kinds of cards */}

      <main>
        <Card title={english ? "Alexis Kees CV":"CV Alexis Kees"} />
        <Card
          title={english ? "Contact and links": "Redes y contacto"}
          items={english ? datosPersonalesEng : datosPersonales}
          titleColor="#333"
          english={english}
        />

        <Card title={english ? "Education" : "Formación"} items={english ? formacionEng : formacion} english={english} />

        <Card
          title={english ? "Technical skills":"Habilidades técnicas"}
          items={english ? frontendEng:frontend}
          //Optional elements to render a DualPanel Card
          items2={english ? backendEng : backend}
          firstPanelTitle="Frontend"
          secondPanelTitle="Backend"
          english={english}
        />
        <Card
          title={english ? "Other tecnical skills":"Otras habilidades técnicas"}
          items={english ? otrasEng:otras}
          english={english}
        />
        <Card title={english ? "Projects":"Proyectos"} items={english ? proyectosEng:proyectos} english={english} />

        <Card title={english ? "Experience":"Experiencia"} items={english ? experienciaEng:experiencia} english={english} />

        <Card title={english ? "English":"Inglés"} items={english ? inglesEng:ingles} english={english} />

        <Card
          title={english ? "Soft skills":"Habilidades blandas"}
          items={english ? habilidadesBlandasEng:habilidadesBlandas}
          english={english}
        />
      </main>

      <footer>
        <p>{`Alexis Kees Bahl - 2026 - ${english ? "All rights reserved" :"Todos los derechos reservados"}`}</p>
        <p>
          <a href="https://iconscout.com/icons/profile" target="_blank">
            Icon
          </a>{" "}
          by{" "}
          <a href="https://iconscout.com/contributors/kudicon" target="_blank">
            Kudicon
          </a>
        </p>
      </footer>
    </>
  );
}
