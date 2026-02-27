import "./Card.css";

export function Card({ children, className = "" }) {
  const classes = ["ui-card", className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  const classes = ["ui-card-title", className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}

export default Card;
