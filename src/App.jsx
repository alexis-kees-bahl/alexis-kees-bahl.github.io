import "./App.css";
import Card from "./components/Card";
import greenHexa from "./assets/green-hexagons.jpg";

// text that will display on contact info card
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
    {"\n"}
    CV en PDF:{" "}
    <a
      href="https://drive.google.com/file/d/1ZlxLALoB3A332-losajQESJ-gOkrsnQ4/view?usp=drivesdk"
      target="blank"
    >
      Curriculum Vitae
    </a>
  </>
);


// single object array that is passed to outer card to render personal data card
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

//array of objects that contains Education info
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
  { title: `Otros estudios`, description: "Licenciatura en Trabajo Social - UNLP - 2007-2013" },
];

// array of objects that contaoins my English education
const ingles = [
  {
    title: "Certificate in Advanced English (C1)",
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

//array of objects that contains my working experience
const experiencia = [
  {
    title: "Proyecto PSI",
    description:
      "Proyecto en curso. Análisis de requisitos, identidad visual, estrategia de marketing"
  },
  {
    title: "Laku indumentaria",
    description:
      "Aplicación frontend con React. Análisis de requisitos, identidad visual, desarrollo de aplicación React"
      
  },
  {
    title: "Aplicación backend Java+Spring+Hibernate",
    description: "Proyecto en curso. Desarrollo de REST API con Java SE"
  },
  {
    title: "Aplicación de notas",
    description:
      "Aplicación de notas personales con filtros y consulta a base de datos, realizada como ejercicio para postulación laboral",
  },
];

//array of objects that cotains my frontend-related technical skills
const frontend = [
  { title: "HTML & CSS", description: "Semántico, responsive, animaciones" },
  { title: "JavaScript", description: "ES6+, async, DOM" },
  { title: "React", description: "Vite, hooks, states, effects, router" },
];

//array of objects that cotains my backend-related technical skills
const backend = [
  { title: "Java Spring Boot", description: "JPA, Hibernate, REST APIs" },
  {
    title: "SQL + MySQL",
    description: "Diseño relacional, consultas complejas",
  },
  { title: "Node.js", description: "" },
  { title: "Amazon Web Services", description: "S3, Route 53, CloudFront" },
];

//"others" array of objects
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

//soft skills array
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

          <Card title="Inglés" items={ingles} />

          <Card title="Experiencia" items={experiencia} />

          <Card
            title="Habilidades técnicas"
            items={frontend}
            items2={backend}
          />

          <Card title="Otras habilidades técnicas" items={otras} />

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
