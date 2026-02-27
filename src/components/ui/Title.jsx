import "./Title.css";

export default function Title({ children, className = "" }) {
  const classes = ["ui-title", className].filter(Boolean).join(" ");
  return <h1 className={classes}>{children}</h1>;
}
