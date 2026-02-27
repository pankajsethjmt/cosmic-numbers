import "./FormInput.css";

export default function FormInput({ className = "", ...props }) {
  const classes = ["ui-form-input", className].filter(Boolean).join(" ");
  return <input className={classes} {...props} />;
}
