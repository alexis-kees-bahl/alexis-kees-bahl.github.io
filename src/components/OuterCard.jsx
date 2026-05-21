/*
This is a reusable card component which will contain
either a carousel or a double panel, depending on the props we pass to it.
*/

export default function OuterCard({
  title,
  navVisible = true,
  nav,
  children,
}) {
  return (
    <div className="card outer-card">

      <div className="oc-header">
        <h2>{title}</h2>
      </div>

      <div className="oc-body">
        {children}
      </div>

      <div className={`oc-nav${navVisible ? " oc-nav--visible" : ""}`}>
        {nav}
      </div>

    </div>
  );
}
