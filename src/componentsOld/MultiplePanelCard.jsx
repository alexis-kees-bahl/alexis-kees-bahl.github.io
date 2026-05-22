// MultiplePanelCard.jsx
//
// props:
//   title   string
//   panels  Array<{
//     title     string
//     color     string
//     textColor string
//     items     Array<{ title, description, bgColor }>
//   }>

import { useState } from "react";
import OuterCard from "../components/OuterCard";
import Carousel from "./Carousel";
import "../App.css";

export default function MultiplePanelCard({ title, panels = [] }) {
  const [expanded, setExpanded] = useState(null); // índice del panel expandido
  const [navs, setNavs] = useState(Array(panels.length).fill(null));

  const expand = (i) => {
    if (expanded === null) setExpanded(i);
  };

  const collapse = (e) => {
    e.stopPropagation();
    setExpanded(null);
  };

  const setNavForPanel = (i) => (nav) => {
    setNavs((prev) => {
      const next = [...prev];
      next[i] = nav;
      return next;
    });
  };

  const activeNav =
    expanded !== null ? (
      <>
        <button className="nav-btn" onClick={collapse} aria-label="Volver">
          ← volver
        </button>
        {navs[expanded]}
        <div />
      </>
    ) : null;

  return (
    <OuterCard title={title} navVisible={expanded !== null} nav={activeNav}>
      <div className="dual-panels">
        {panels.map((panel, i) => (
          <Carousel
            key={i}
            items={panel.items}
            data={panel}
            onNav={setNavForPanel(i)}
            isExpanded={expanded === i}
            isHidden={expanded !== null && expanded !== i}
            onExpand={() => expand(i)}
          />
        ))}
      </div>
    </OuterCard>
  );
}
