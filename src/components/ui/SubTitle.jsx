import "./SubTitle.css";

export default function SubTitle({ children, className = "" }) {
  const classes = ["ui-subtitle", className].filter(Boolean).join(" ");
  return <p className={classes}>{children}</p>;
}
