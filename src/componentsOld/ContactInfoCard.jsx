/* 
This is a simple card made to display personal data.
It is only used in App.jsx to show name, mail and phone number.
*/
export default function ContactInfoCard({ title, children }) {
  return (
    <div className="card card-datos">
      <h2>{title}</h2>
      <div className="card-datos-body">{children}</div>
    </div>
  );
}
