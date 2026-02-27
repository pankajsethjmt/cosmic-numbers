import "./FormLabel.css";

export default function FormLabel({ children, htmlFor, className = "" }) {
  const classes = ["ui-form-label", className].filter(Boolean).join(" ");
  return (
    <label className={classes} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
