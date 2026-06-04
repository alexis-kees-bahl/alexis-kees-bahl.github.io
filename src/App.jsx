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

const RenderEsp = () => {
  return (
    <>
      <main>
        <Card title="CV Alexis Kees" />
        <Card
          title="Redes y contacto"
          items={datosPersonales}
          titleColor="#333"
          english={false}
        />

        <Card title="Formación" items={formacion} english={false} />

        <Card
          title="Habilidades técnicas"
          items={frontend}
          //Optional elements to render a DualPanel Card
          items2={backend}
          firstPanelTitle="Frontend"
          secondPanelTitle="Backend"
          english={false}
        />
        <Card
          title="Otras habilidades técnicas"
          items={otras}
          english={false}
        />
        <Card title="Proyectos" items={proyectos} english={false} />

        <Card title="Experiencia" items={experiencia} english={false} />

        <Card title="Inglés" items={ingles} english={false} />

        <Card
          title="Habilidades blandas"
          items={habilidadesBlandas}
          english={false}
        />
      </main>

      <footer>
        <p>Alexis Kees Bahl - 2026 - Todos los derechos reservados</p>
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
};

const RenderEng = () => {
  return (
    <>
      <main>
        <Card title="Alexis Kees CV" />
        <Card
          title="Contact & links"
          items={datosPersonalesEng}
          titleColor="#333"
          english={true}
        />

        <Card title="Education" items={formacionEng} english={true} />

        <Card
          title="Technical skills"
          items={frontendEng}
          //Optional elements to render a DualPanel Card
          items2={backendEng}
          firstPanelTitle="Frontend"
          secondPanelTitle="Backend"
          english={true}
        />

        <Card title="Other technical skills" items={otrasEng} english={true} />
        
        <Card title="Projects" items={proyectosEng} english={true} />

        <Card title="Experience" items={experienciaEng} english={true} />

        <Card title="English" items={inglesEng} english={true} />

        <Card
          title="Soft skills"
          items={habilidadesBlandasEng}
          english={true}
        />
      </main>

      <footer>
        <p>Alexis Kees Bahl - 2026 - All rights reserved</p>
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
};

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

      {english ? <RenderEng /> : <RenderEsp />}
    </>
  );
}
