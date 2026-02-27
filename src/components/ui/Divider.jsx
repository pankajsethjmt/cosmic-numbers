import "./Divider.css";

const DEFAULT_SYMBOL = String.fromCodePoint(0x2726);

export default function Divider({ symbol = DEFAULT_SYMBOL, className = "" }) {
  const classes = ["ui-divider", className].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      <span>{symbol}</span>
    </div>
  );
}
