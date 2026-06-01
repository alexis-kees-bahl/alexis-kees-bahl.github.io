import "./App.css";
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

export default function App() {
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

      {/*
      Main section containing Card components
      with different parameters
      that result in different kinds of cards */}
      <main>
        <Card title="Curriculum Vitae" />
        <Card
          title="Datos y contacto"
          items={datosPersonales}
          titleColor="#333"
        />

        <Card title="Formación" items={formacion} />

        <Card
          title="Habilidades técnicas"
          items={frontend}
          //Optional elements to render a DualPanel Card
          items2={backend}
          firstPanelTitle="Frontend"
          secondPanelTitle="Backend"
        />

        <Card title="Otras habilidades técnicas" items={otras} />

        <Card title="Experiencia" items={experiencia} />

        <Card title="Proyectos" items={proyectos} />

        <Card title="Inglés" items={ingles} />

        <Card title="Habilidades blandas" items={habilidadesBlandas} />
      </main>

      {/* footer showing rights and  */}
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
}
