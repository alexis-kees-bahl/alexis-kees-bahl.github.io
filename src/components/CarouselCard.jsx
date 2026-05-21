// CarouselCard.jsx
// Carousel autónomo: envuelve Carousel en una OuterCard.
// El nav lo construye Carousel y lo sube via onNav.
//
// props:
//   title  string
//   items  Array<{ title, description, bgColor }>

import { useState } from "react";
import OuterCard from "./OuterCard";
import Carousel from "./Carousel";
import "../cards.css";

export default function CarouselCard({ title, items = [] }) {
  const [nav, setNav] = useState(null);

  return (
    <OuterCard title={title} nav={nav} navVisible={true}>
      <Carousel items={items} onNav={setNav} />
    </OuterCard>
  );
}
