// App.jsx
import "./App.css";
import ContactInfoCard from "./components/ContactInfoCard";
import OuterCard from "./components/OuterCard";

const textoMultilinea = `Mail: alexiskeesbahl@mail.com
Teléfono: +54-9-2214880444
LinkedIn: linkedin.com/in/alexis-kees-bahl
GitHub: github.com/alexis-kees-bahl`;

const datosPersonales = [
  {
    title: "Alexis Kees Bahl",
    description: textoMultilinea,
  },
];

const experiencia = [
  {
    title: "Proyecto PSI",
    description: "Identidad visual completa + sitio web",
    bgColor: "#383858",
  },
  {
    title: "Branding Estudio X",
    description: "Logo, paleta y sistema tipográfico",
    bgColor: "#2d1b4e",
  },
  {
    title: "Portfolio personal",
    description: "React + Vite, diseño y desarrollo",
    bgColor: "#0d2137",
  },
];

const prueba = [
  {title: "Prueba 1", description: "Descripción de prueba 1", bgColor: "#3a0ca3"}
]

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
      
      <OuterCard title="Datos Personales" items={datosPersonales} />

      <OuterCard title="Experiencia" items={experiencia} />

      <OuterCard title="Habilidades" items={frontend} items2={backend} />

      <OuterCard title="Prueba" items={prueba} />
    </main>
  );
}
