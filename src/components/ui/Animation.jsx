import "./Animation.css";

export default function Animation({ children, className = "" }) {
  const classes = ["ui-animation", className].filter(Boolean).join(" ");
  return <span className={classes}>{children}</span>;
}
