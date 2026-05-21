// App.jsx
import "./App.css";
import ContactInfoCard from "./components/ContactInfoCard";
import CarouselCard from "./components/CarouselCard";
import MultiplePanelCard from "./components/MultiplePanelCard";

const experiencia = [
  { title: "Proyecto PSI", description: "Identidad visual completa + sitio web", bgColor: "#1a1a2e" },
  { title: "Branding Estudio X", description: "Logo, paleta y sistema tipográfico", bgColor: "#2d1b4e" },
  { title: "Portfolio personal", description: "React + Vite, diseño y desarrollo", bgColor: "#0d2137" },
];

const frontend = [
  { title: "React", description: "Vite, hooks, estado global" },
  { title: "HTML & CSS", description: "Semántico, responsive, animaciones" },
  { title: "JavaScript", description: "ES6+, async, DOM" },
];

const backend = [
  { title: "Java Spring Boot", description: "JPA, Hibernate, REST APIs" },
  { title: "SQL", description: "Diseño relacional, consultas complejas" },
];

export default function App() {
  return (
    <main>
      <ContactInfoCard title="Datos personales">
        <p>Nombre: Ale</p>
        <p>Mail: ale@mail.com</p>
        <p>Teléfono: +54-9-...</p>
      </ContactInfoCard>

      <CarouselCard title="Experiencia" items={experiencia} />

      <MultiplePanelCard
  title="Lenguajes & tecnologías"
  panels={[
    { title: "Frontend", color: "#38d39f", textColor: "#04342c", items: frontend },
    { title: "Backend", color: "#e673a1", textColor: "#4b1528", items: backend },
  ]}
/>
    </main>
  );
}
