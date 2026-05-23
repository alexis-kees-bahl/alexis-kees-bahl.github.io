// App.jsx
import "./App.css";
import Card from "./components/Card";

const textoMultilinea = (
  <>
    LinkedIn:{" "}
    <a href="https://linkedin.com/in/alexis-kees-bahl" target="blank">
      linkedin.com/in/alexis-kees-bahl
    </a>
    {"\n"}
    GitHub:{" "}
    <a href="https://github.com/alexis-kees-bahl" target="blank">
      github.com/alexis-kees-bahl
    </a>
  </>
);

const datosPersonales = [
  {
    title: "Alexis Kees Bahl",
    description: textoMultilinea,
    bgColor: "rgba(255, 255, 255, 0.6)",
    txtColor: "#333",
    titleColor: "#333",
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
  { title: "Univesidad Java", description: "Ing. Ubaldo Acosta - Udemy 2025" },
  {
    title: "Curso de Srping y React",
    description: "Ing. Ubaldo Acosta - Udemy 2025",
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
  {
    title: `Curso de pensamiento lógico:
datos, estructuras y funciones`,
    description: "Platzi, 2022",
  },
  { title: `Algoritmos y diagramas de flujo`, description: "Platzi, 2022" },
  { title: `Licenciatura en Trabajo Social`, description: "UNLP - 2007-2013" },
];

const ingles = [
  {
    title: "Cerficate in Advanced English (C1)",
    description: "University of Cambridge, 2019",
  },
  { title: "Curso de Inglés para Programadores", description: "Platzi, 2022" },
  {
    title: `Curso de Inglés Avanzado C1:
Argumentos y Discusiones`,
    description: "Platzi, 2023",
  },
  {
    title: `Curso de Inglés Avanzado C1:
Recursos Conversacionales
y Lingüísticos`,
    description: "Platzi, 2023",
  },
  {
    title: `Curso de Inglés Avanzado:
Comunicación Persuasiva y Efectiva `,
    description: "Platzi, 2023",
  },
  {
    title: `Curso de Inglés Avanzado C1:
Presentaciones y Expresión Oral`,
    description: "Platzi, 2023",
  },
  {
    title: `Curso Avanzado de Vocabulario
y Expresiones en Inglés`,
    description: "Platzi, 2023",
  },
];

const experiencia = [
  {
    title: "Proyecto PSI",
    description:
      "Proyecto en curso. Análisis de requisitos, identidad visual, estrategia de marketing",
    bgColor: "#383858",
  },
  {
    title: "Laku indumentaria",
    description:
      "Aplicación frontend con React. Análisis de requisitos, identidad visual, desarrollo de aplicación React",
    bgColor: "#2d1b4e",
  },
  {
    title: "Aplicación backend Java+Spring+Hibernate",
    description: "Proyecto en curso. Desarrollo de REST API con Java SE",
    bgColor: "#0d2137",
  },
  {
    title: "Aplicación de notas",
    description:
      "Aplicación de notas personales con filtros y consulta a base de datos, realizada como ejercicio para postulación laboral",
  },
];

const frontend = [
  { title: "HTML & CSS", description: "Semántico, responsive, animaciones" },
  { title: "JavaScript", description: "ES6+, async, DOM" },
  { title: "React", description: "Vite, hooks, states, effects, router" },
];

const backend = [
  { title: "Java Spring Boot", description: "JPA, Hibernate, REST APIs" },
  {
    title: "SQL + MySQL",
    description: "Diseño relacional, consultas complejas",
  },
  { title: "Node.js", description: "" },
  { title: "Amazon Web Services", description: "S3, Route 53, CloudFront" },
];

const otras = [
  { title: "Control de versiones", description: "Git y GitHub" },
  {
    title: "Sistemas operativos",
    description: "Windows y Linux (Ubuntu, Kali)",
  },
  {
    title: "Gestión de proyectos",
    description:
      "Trello, Miro, Diagrama de Gantt, Calendar, Notion, Excalidraw, Draw.io",
  },
  {
    title: "Diseño gráfico",
    description: "Photoshop, Illustrator, Figma, Corel Draw",
  },
];

const habilidadesBlandas = [
  {
    title: "Comunicación",
    description:
      "Vasta experiencia conformado y dirigiendo equipos interdisciplinarios. Habilidades de comunicación efectiva y liderazgo colaborativo.",
  },
  {
    title: "Visión integral",
    description:
      "Diseño de proyectos considerando desde el principio los distintos aspectos y momentos de una aplicación.",
  },
  {
    title: "Análisis de requisitos",
    description:
      "Identificación de necesidades y traducción en requisitos funcionales.",
  },

  {
    title: "Gestión de proyectos",
    description:
      "Diseño y gestión de proyectos profesionales multisectoriales, con estrategias ajustadas a objetivos.",
  },
  {
    title: "Seguimiento de procesos",
    description: "Capacidad analítica y enfoque estratégico.",
  },
];

export default function App() {
  return (
    <>
      <main>
        <Card title="Curriculum Vitae" />
        <Card
          title="Datos y contacto"
          items={datosPersonales}
          titleColor="#333"
        />

        <Card title="Formación" items={formacion} />

        <Card title="Inglés" items={ingles} />

        <Card title="Experiencia" items={experiencia} />

        <Card title="Habilidades técnicas" items={frontend} items2={backend} />

        <Card title="Otras habilidades técnicas" items={otras} />

        <Card title="Habilidades blandas" items={habilidadesBlandas} />
      </main>
      <div className="footer">
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
      </div>
    </>
  );
}
