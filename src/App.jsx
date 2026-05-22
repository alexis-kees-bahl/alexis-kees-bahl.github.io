// App.jsx
import "./App.css";
import OuterCard from "./components/OuterCard";

const textoMultilinea = `Mail: alexiskeesbahl@mail.com
Teléfono: +54-9-2214880444
LinkedIn: linkedin.com/in/alexis-kees-bahl
GitHub: github.com/alexis-kees-bahl`;

const datosPersonales = [
  {
    title: "Alexis Kees Bahl",
    description: textoMultilinea,
    bgColor: "rgba(255, 255, 255, 0.6)",
    txtColor: "#333",
    overlayColor: "rgba(255, 255, 255, 0)",
  },
];

const formacion = [
  {
    title: `Tecnicatura Universitaria
en Diseño y Desarrollo
de Aplicaciones Multiplataforma`,
    description: "UNNOBA - 2022-2025",
  },
  { title: "Programación Full Stack", description: "Platzi, 2021" },
  { title: "Curso de Git y GitHub", description: "Platzi, 2022" },
  {
    title: `Introducción a la terminal
y línea de comandos`,
    description: "Platzi, 2024",
  },
  { title: "Expresiones regulares", description: "Platzi, 2023" },
  {
    title: `Historia de la programación:
lenguajes y paradigmas`,
    description: "Platzi, 2024",
  },
  {
    title: "Fundamentos de Ingeniería de Software",
    description: "Platzi, 2023",
  },
  {title:`Curso de pensamiento lógico:
datos, estructuras y funciones`, description:"Platzi, 2022"},
  {title:`Algoritmos y diagramas de flujo`, description:"Platzi, 2022"},

];

const ingles = [
  {title: "Cerficiate in Advanced English (C1)", description: "University of Cambridge, 2019"},
  {title:"Curso de Inglés para Programadores", description:"Platzi, 2022"},
  {title:`Curso de Inglés Avanzado C1:
Argumentos y Discusiones`, description:"Platzi, 2023"},
  {title:`Curso de Inglés Avanzado C1:
Recursos Conversacionales
y Lingüísticos`, description:"Platzi, 2023"},
  {title:`Curso de Inglés Avanzado:
Comunicación Persuasiva y Efectiva `, description:"Platzi, 2023"},
  {title:`Curso de Inglés Avanzado C1:
Presentaciones y Expresión Oral`, description:"Platzi, 2023"},
  {title:`Curso Avanzado de Vocabulario
y Expresiones en Inglés`, description:"Platzi, 2023"},


]

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

const frontend = [
  { title: "React", description: "Vite, hooks, estado global" },
  { title: "HTML & CSS", description: "Semántico, responsive, animaciones" },
  { title: "JavaScript", description: "ES6+, async, DOM" },
];

const backend = [
  { title: "Java Spring Boot", description: "JPA, Hibernate, REST APIs" },
  { title: "SQL", description: "Diseño relacional, consultas complejas" },
];

const habilidadesBlandas = []

export default function App() {
  return (
    <main>
      <OuterCard title="Datos Personales" items={datosPersonales} />

      <OuterCard title="Formación" items={formacion} />

      <OuterCard title="Inglés" items={ingles} />

      <OuterCard title="Experiencia" items={experiencia} />

      <OuterCard title="Habilidades técnicas" items={frontend} items2={backend} />

      <OuterCard title="Habilidades blandas" items={habilidadesBlandas} />


    </main>
  );
}
